import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import { GemIcon } from "lucide-react";
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
            <main className="flex flex-col items-center justify-center gap-4 w-full">
                <Timeline />
            </main>
        </section>
    );
}
