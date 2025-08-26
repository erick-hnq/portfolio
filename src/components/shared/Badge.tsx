import FadeContent from "../ui/FadeContent/FadeContent";

export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <FadeContent
            className="sm:text-base text-sm text-white/50 bg-white/5 backdrop-blur-sm py-2 px-6 rounded-full w-fit mx-auto flex items-center gap-2 font-light border-2 border-white/10"
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
        >
            {children}
        </FadeContent>
    );
}
