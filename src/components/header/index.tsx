import { Nav } from "../nav";
import { Logo } from "../shared/Logo";

export function Header() {
    return (
        <header className="sticky top-0 left-0 right-0 z-10 flex justify-between items-center bg-white/5 border-2 border-white/10 backdrop-blur-sm py-4 px-8 rounded-full max-w-5xl mx-auto mt-10">
            <Logo />
            <Nav />
        </header>
    );
}
