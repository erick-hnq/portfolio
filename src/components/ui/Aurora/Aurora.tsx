"use client";

import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Calibração do fallback: abaixo de MIN_FPS na janela medida, troca para a imagem.
const WARMUP_MS = 500;
const MEASURE_MS = 2000;
const MIN_FPS = 45;
const FADE_MS = 500;
const FALLBACK_KEY = "aurora-fallback";

function canRunAurora() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return false;
    try {
        if (sessionStorage.getItem(FALLBACK_KEY)) return false;
    } catch {}
    const gl = document.createElement("canvas").getContext("webgl2");
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = String(
        gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER),
    );
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|basic render driver/i.test(renderer);
}

const toRgb = (stops: string[]) =>
    stops.map((hex) => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
    });

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    time?: number;
    speed?: number;
    fallbackSrc: string;
}

export default function Aurora(props: AuroraProps) {
    const {
        colorStops = ["#5227FF", "#7cff67", "#5227FF"],
        amplitude = 1.0,
        blend = 0.5,
        fallbackSrc,
    } = props;
    const propsRef = useRef<AuroraProps>(props);
    propsRef.current = props;

    const ctnDom = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const ctn = ctnDom.current;
        if (!ctn || !canRunAurora()) return;

        const renderer = new Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: true,
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.canvas.style.backgroundColor = "transparent";

        let program: Program | undefined;

        function resize() {
            if (!ctn) return;
            const width = ctn.offsetWidth;
            const height = ctn.offsetHeight;
            renderer.setSize(width, height);
            if (program) {
                program.uniforms.uResolution.value = [width, height];
            }
        }
        window.addEventListener("resize", resize);

        const geometry = new Triangle(gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }

        let lastStops = colorStops;
        program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: amplitude },
                uColorStops: { value: toRgb(colorStops) },
                uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                uBlend: { value: blend },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });
        ctn.appendChild(gl.canvas);

        let animateId = 0;
        let inView = false;
        let failed = false;
        let shown = false;
        let decided = false;
        let lastT: number | undefined;
        let activeMs = 0;
        let frames = 0;
        let fadeTimer: ReturnType<typeof setTimeout> | undefined;

        const stop = () => {
            cancelAnimationFrame(animateId);
            animateId = 0;
        };
        // Só roda (e mede) com a hero visível e a aba ativa.
        const start = () => {
            if (animateId || failed || !inView || document.hidden) return;
            lastT = undefined;
            animateId = requestAnimationFrame(update);
        };
        const onVisibility = () => (document.hidden ? stop() : start());
        const observer = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            if (inView) start();
            else stop();
        });

        const destroy = () => {
            stop();
            observer.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
            window.removeEventListener("resize", resize);
            if (gl.canvas.parentNode === ctn) {
                ctn.removeChild(gl.canvas);
            }
            gl.getExtension("WEBGL_lose_context")?.loseContext();
        };

        const fail = () => {
            failed = true;
            stop();
            try {
                sessionStorage.setItem(FALLBACK_KEY, "1");
            } catch {}
            setVisible(false);
            fadeTimer = setTimeout(destroy, FADE_MS);
        };

        const update = (t: number) => {
            animateId = requestAnimationFrame(update);

            if (!decided && lastT !== undefined) {
                activeMs += t - lastT;
                if (activeMs > WARMUP_MS) frames++;
                if (activeMs >= WARMUP_MS + MEASURE_MS) {
                    decided = true;
                    const fps = (frames * 1000) / (activeMs - WARMUP_MS);
                    if (process.env.NODE_ENV === "development") {
                        console.debug(`[Aurora] ${fps.toFixed(1)} fps`);
                    }
                    if (fps < MIN_FPS) return fail();
                }
            }
            lastT = t;

            const { time = t * 0.01, speed = 1.0 } = propsRef.current;
            if (program) {
                program.uniforms.uTime.value = time * speed * 0.1;
                program.uniforms.uAmplitude.value =
                    propsRef.current.amplitude ?? 1.0;
                program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
                const stops = propsRef.current.colorStops ?? colorStops;
                if (stops !== lastStops) {
                    lastStops = stops;
                    program.uniforms.uColorStops.value = toRgb(stops);
                }
                renderer.render({ scene: mesh });
            }
            if (!shown) {
                shown = true;
                setVisible(true);
            }
        };

        document.addEventListener("visibilitychange", onVisibility);
        observer.observe(ctn);

        resize();

        return () => {
            clearTimeout(fadeTimer);
            destroy();
        };
    }, [amplitude]);

    return (
        <div className="relative w-full h-full">
            <Image
                src={fallbackSrc}
                alt=""
                fill
                priority
                sizes="100vw"
                className={`object-cover object-top transition-opacity duration-500 ${visible ? "opacity-0" : "opacity-100"}`}
            />
            <div
                ref={ctnDom}
                className={`absolute inset-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
}
