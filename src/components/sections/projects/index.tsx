import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import { BriefcaseIcon } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
    return (
        <section className="max-w-5xl mx-auto flex flex-col items-center justify-center">
            <Badge>
                <BriefcaseIcon className="size-4" />
                Projetos
            </Badge>
            <div className="flex items-center gap-4">
                <BlurText
                    text="O que eu já fiz?"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-7xl text-4xl sm:mb-5 mb-3 text-white font-semibold break"
                />
            </div>
            <div className="flex items-center gap-4">
                <BlurText
                    text="Meus"
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    className="sm:text-5xl text-2xl text-white font-semibold"
                />
                <BlurText
                    text="trabalhos"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-7xl text-4xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                />
            </div>
            <main className="flex flex-col items-center justify-center w-full mt-10">
                <ProjectCard />
            </main>
        </section>
    );
}
