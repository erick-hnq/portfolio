import { AboutMeSection } from "@/components/sections/about-me";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
    return (
        <div className="sm:space-y-10 space-y-5">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
        </div>
    );
}
