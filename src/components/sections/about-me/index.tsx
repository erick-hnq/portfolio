import { AnimatedUnderline } from "@/components/shared/AnimatedUnderline";
import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import FadeContent from "@/components/ui/FadeContent/FadeContent";
import { GemIcon } from "lucide-react";
import { Profile } from "./Profile";
import { WhatIDoTimeline } from "./WhatIDoTimeline";

export function AboutMeSection() {
    return (
        <section
            id="about-me"
            className="max-w-5xl mx-auto flex flex-col items-center justify-center scroll-mt-20"
        >
            <Badge>
                <GemIcon className="size-4" />
                Sobre mim
            </Badge>
            <div className="flex items-center gap-4">
                <BlurText
                    text="Quem"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-7xl text-4xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                />
                <BlurText
                    text="sou eu?"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-7xl text-4xl sm:mb-5 mb-3 text-white font-semibold break"
                />
            </div>
            <BlurText
                text="O que eu faço?"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="sm:text-5xl text-2xl text-white font-semibold"
            />
            <main className="flex flex-col items-center justify-center w-full mt-10">
                <div className="flex flex-col w-full relative z-10">
                    <Profile />
                    <FadeContent className="p-[1px] bg-gradient-to-r from-white/10 via-white/50 to-white/10 rounded-xl rounded-t-none">
                        <div className="flex flex-col gap-4 bg-black/80 backdrop-blur-sm rounded-xl rounded-t-none px-4 py-10">
                            <p className="text-white/50 text-sm">
                                Aos 20 anos de idade e com{" "}
                                <AnimatedUnderline>
                                    mais de cinco anos de experiência/estudo em
                                    programação,
                                </AnimatedUnderline>{" "}
                                hoje venho me especializando em desenvolvimento
                                web, com foco em tecnologias modernas e práticas
                                de desenvolvimento ágil.
                            </p>
                            <p className="text-white/50 text-sm">
                                Atualmente estou trabalhando como desenvolvedor
                                freelancer,{" "}
                                <AnimatedUnderline>
                                    o que fortaleceu ainda mais minha
                                    experiência na área,
                                </AnimatedUnderline>{" "}
                                e me fez aprender a lidar com diferentes tipos
                                de projetos e clientes.
                            </p>
                            <p className="text-white/50 text-sm">
                                <AnimatedUnderline>
                                    Estou totalmente aberto a novas
                                    oportunidades e desafios,
                                </AnimatedUnderline>{" "}
                                então se você tem um projeto em mente ou uma
                                vaga de emprego que se encaixe com o meu perfil,
                                não hesite em me contatar!
                            </p>
                        </div>
                    </FadeContent>
                </div>
                <WhatIDoTimeline />
            </main>
        </section>
    );
}
