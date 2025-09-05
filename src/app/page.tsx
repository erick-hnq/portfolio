import { AboutMeSection } from "@/components/sections/about-me";
import { ContactsSection } from "@/components/sections/contacts";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
    return (
        <div className="space-y-10">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
            <ContactsSection />
        </div>
    );
}
