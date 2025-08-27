import GithubIcon from "@/components/icons/GithubIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { DownloadIcon, GemIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { Timeline } from "./Timeline";

export function AboutMeSection() {
    return (
        <section className="max-w-5xl mx-auto flex flex-col items-center justify-center">
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
                    className="sm:text-7xl text-3xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                />
                <BlurText
                    text="sou eu?"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-7xl text-3xl sm:mb-5 mb-3 text-white font-semibold break"
                />
            </div>
            <BlurText
                text="O que eu faço?"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="sm:text-5xl text-xl text-white font-semibold"
            />
            <main className="flex flex-col items-center justify-center gap-4 w-full mt-10">
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between gap-4 bg-gradient-to-b from-content2 to-transparent p-4 rounded-xl rounded-b-none">
                        <div className="flex items-center gap-4">
                            <Avatar
                                fallback
                                className="w-20 h-20 text-large shadow shadow-primary/50"
                                src="https://github.com/Erick244.png"
                            />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-white text-2xl font-semibold">
                                    Erick - 20 anos
                                </h1>
                                <p className="text-white/50 text-sm">
                                    Desenvolvedor Fullstack
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center self-start gap-2">
                            <Link
                                href="https://github.com/Erick244"
                                target="_blank"
                            >
                                <Tooltip content="Acessar Github">
                                    <Button
                                        variant="bordered"
                                        isIconOnly
                                        className="bg-content2"
                                    >
                                        <GithubIcon className="size-4" />
                                        <span className="sr-only">Github</span>
                                    </Button>
                                </Tooltip>
                            </Link>
                            <Link
                                href="mailto:erickcontato01@gmail.com"
                                target="_blank"
                            >
                                <Tooltip content="Enviar E-mail">
                                    <Button
                                        variant="bordered"
                                        isIconOnly
                                        className="bg-content2"
                                    >
                                        <MailIcon className="size-4" />
                                        <span className="sr-only">E-mail</span>
                                    </Button>
                                </Tooltip>
                            </Link>
                            <Link
                                href="https://wa.me/5512997896834"
                                target="_blank"
                            >
                                <Tooltip content="Enviar WhatsApp">
                                    <Button
                                        variant="bordered"
                                        isIconOnly
                                        className="bg-content2"
                                    >
                                        <WhatsAppIcon className="size-4" />
                                        <span className="sr-only">
                                            WhatsApp
                                        </span>
                                    </Button>
                                </Tooltip>
                            </Link>
                            <Link
                                href="/cv.pdf"
                                download="ERICK-HENRIQUE-CV.pdf"
                            >
                                <Tooltip content="Download Curriculum">
                                    <Button
                                        variant="bordered"
                                        isIconOnly
                                        className="bg-content2"
                                    >
                                        <DownloadIcon className="size-4" />
                                        <span className="sr-only">
                                            Curriculum
                                        </span>
                                    </Button>
                                </Tooltip>
                            </Link>
                        </div>
                    </div>
                    <div className="p-[1px] bg-gradient-to-r from-white/10 via-white/50 to-white/10 rounded-xl rounded-t-none">
                        <div className="flex flex-col gap-4 bg-black/80 backdrop-blur-sm rounded-xl rounded-t-none p-4">
                            <p className="text-white/50 text-sm">
                                Olá, sou Erick, um desenvolvedor fullstack com
                                paixão por criar soluções tecnológicas que
                                impactam a vida das pessoas.
                            </p>
                            <p className="text-white/50 text-sm">
                                Sou apaixonado por tecnologia e por criar
                                soluções que impactam a vida das pessoas.
                            </p>
                        </div>
                    </div>
                </div>
                <Timeline />
            </main>
        </section>
    );
}
