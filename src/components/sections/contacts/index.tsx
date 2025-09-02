import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import { PhoneIcon } from "lucide-react";

export function ContactsSection() {
    return (
        <section className="max-w-5xl mx-auto flex flex-col items-center justify-center">
            <Badge>
                <PhoneIcon className="size-4" />
                Contatos
            </Badge>
            <div className="flex items-center gap-4">
                <BlurText
                    text="Me mostre"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-7xl text-4xl sm:mb-5 mb-3 text-white font-semibold break"
                />
                <BlurText
                    text="suas ideias"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="sm:text-8xl text-5xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                />
            </div>
            <div className="flex items-center gap-4">
                <BlurText
                    text="Vamos trabalhar juntos?"
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    className="sm:text-5xl text-2xl text-white font-semibold"
                />
            </div>
            <main>contatos</main>
        </section>
    );
}
