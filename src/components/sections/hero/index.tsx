import LogoLoop from "@/component/ui/LogoLoop/LogoLoop";
import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import Prism from "@/components/ui/Prism/Prism";
import TextType from "@/components/ui/TextType/TextType";
import { techs } from "@/data/techs.data";
import { Button } from "@heroui/button";
import { GripIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section>
            <div className="w-full h-[600px] absolute top-0 left-0 sm:block hidden">
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
            <div className="w-full h-[600px] absolute top-0 left-0 sm:hidden block">
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={2.6}
                    baseWidth={5.5}
                    scale={2.6}
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
                            className="sm:text-7xl text-3xl sm:mb-5 mb-3 text-white font-semibold break"
                        />
                        <BlurText
                            text="Erick Henrique"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="sm:text-7xl text-3xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                        />
                    </div>
                    <BlurText
                        text="Seu desenvolvedor fullstack."
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        className="sm:text-5xl text-xl text-white font-semibold"
                    />
                    <div className="relative flex items-center justify-center mt-5">
                        <TextType
                            initialDelay={600}
                            text={
                                "Apaixonado por tecnologia e programação eu entrego o meu melhor para a sua ideia."
                            }
                            typingSpeed={30}
                            pauseDuration={1500}
                            showCursor={false}
                            textColors={["#d8d8d8"]}
                            className="relative z-10 sm:text-base text-sm text-white/50 text-center px-6 w-fit mx-auto flex items-center gap-2 font-light"
                        />
                        <div className="bg-black/50 w-full h-full blur-lg absolute top-0 left-0 z-0" />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <Link href="#contact">
                        <Button
                            className="text-sm sm:text-base"
                            size="lg"
                            variant="shadow"
                            color="primary"
                        >
                            Entre em contato
                        </Button>
                    </Link>
                    <Link href="#about">
                        <Button
                            className="bg-white/10 border-white/20 text-white backdrop-blur-sm text-sm sm:text-base"
                            size="lg"
                            variant="shadow"
                        >
                            Sobre mim
                        </Button>
                    </Link>
                </div>
            </main>
            <div className="h-[200px] max-w-5xl mx-auto relative overflow-hidden mt-10">
                <LogoLoop
                    logos={techs}
                    speed={60}
                    direction="left"
                    logoHeight={30}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#000000"
                    ariaLabel="Technology partners"
                />
            </div>
        </section>
    );
}
