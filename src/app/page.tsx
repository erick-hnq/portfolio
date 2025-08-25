// import DarkVeil from "@/components/ui/DarkVeil/DarkVeil";
import BlurText from "@/components/ui/BlurText/BlurText";
import Prism from "@/components/ui/Prism/Prism";
import TextType from "@/components/ui/TextType/TextType";
import { GripIcon, TriangleIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="px-4 py-10">
            {/* hero section */}
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
                        noise={0.5}
                        glow={1}
                    />
                </div>
                <header className="relative z-10 flex justify-between items-center bg-white/5 border-2 border-white/10 backdrop-blur-sm py-4 px-8 rounded-full max-w-5xl mx-auto">
                    <div className="text-white text-xl font-light flex items-center gap-2">
                        <TriangleIcon strokeWidth={1.5} />
                        <span>Erick Henrique</span>
                    </div>
                    <nav className="text-white text-sm flex gap-4">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </header>
                <main className="relative z-10 mt-20 space-y-10">
                    <div className="text-white/50 bg-white/5 backdrop-blur-sm py-2 px-6 rounded-full w-fit mx-auto flex items-center gap-2 font-light border-2 border-white/10">
                        <GripIcon className="size-4" />
                        <span>Seja bem vindo ao meu site!</span>
                    </div>
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
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className="relative z-10 text-base text-white/50 text-center px-6 w-fit mx-auto flex items-center gap-2 font-light"
                            />
                            <div className="bg-black/50 w-full h-10 blur-lg absolute top-0 left-0 z-0" />
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
}
