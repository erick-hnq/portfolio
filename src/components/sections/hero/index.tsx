import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import Prism from "@/components/ui/Prism/Prism";
import TextType from "@/components/ui/TextType/TextType";
import { Button } from "@heroui/button";
import { GripIcon } from "lucide-react";

export function HeroSection() {
    return (
        <section>
            <div className="w-full h-[600px] absolute top-0 left-0">
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={3}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0}
                    glow={1}
                />
            </div>
            <main className="relative z-10 mt-20 space-y-10">
                <Badge>
                    <GripIcon className="size-4" />
                    Seja bem vindo ao meu site!
                </Badge>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-4">
                        <BlurText
                            text="Olá, sou"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-7xl mb-5 text-white font-semibold"
                        />
                        <BlurText
                            text="Erick Henrique"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-7xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                        />
                    </div>
                    <BlurText
                        text="Seu desenvolvedor fullstack."
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        className="text-5xl text-white font-semibold"
                    />
                    <div className="relative flex items-center justify-center mt-5">
                        <TextType
                            text={
                                "Apaixonado por tecnologia e programação eu entrego o meu melhor para a sua ideia."
                            }
                            typingSpeed={30}
                            pauseDuration={1500}
                            showCursor={false}
                            className="relative z-10 text-base text-white/50 text-center px-6 w-fit mx-auto flex items-center gap-2 font-light"
                        />
                        <div className="bg-black/50 w-full h-10 blur-lg absolute top-0 left-0 z-0" />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <Button size="lg" variant="shadow" color="primary">
                        Entre em contato
                    </Button>
                    <Button
                        size="lg"
                        variant="shadow"
                        className="bg-white/10 border-white/20 text-white backdrop-blur-sm"
                    >
                        Sobre mim
                    </Button>
                </div>
            </main>
        </section>
    );
}
