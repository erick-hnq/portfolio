import { Badge } from "@/components/shared/Badge";
import BlurText from "@/components/ui/BlurText/BlurText";
import { PhoneIcon } from "lucide-react";
import { Profile } from "../about-me/Profile";
import { ContactForm } from "./ContactForm";
import { FAQ } from "./FAQ";

export function ContactsSection() {
    return (
        <section
            id="contacts"
            className="max-w-5xl mx-auto flex flex-col items-center justify-center scroll-mt-20"
        >
            <Badge>
                <PhoneIcon className="size-4" />
                Contatos
            </Badge>
            <div className="flex items-center sm:gap-4 gap-2">
                <BlurText
                    text="Me mostre"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="md:text-7xl sm:text-4xl text-3xl md:mb-5 sm:mb-3 mb-1 text-white font-semibold break"
                />
                <BlurText
                    text="suas ideias"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="md:text-8xl sm:text-5xl text-4xl text-white font-(family-name:--font-great-vibes) font-light tracking-wide"
                />
            </div>
            <div className="flex items-center gap-4">
                <BlurText
                    text="Vamos trabalhar juntos?"
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    className="md:text-5xl sm:text-2xl text-xl text-white font-semibold"
                />
            </div>
            <main className="mt-15 w-full flex md:flex-row flex-col items-start justify-center gap-10">
                <div className="space-y-2 w-full mb-10 md:mb-0">
                    <Profile />
                    <FAQ />
                </div>
                <ContactForm />
            </main>
        </section>
    );
}
