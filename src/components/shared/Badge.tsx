export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-white/50 bg-white/5 backdrop-blur-sm py-2 px-6 rounded-full w-fit mx-auto flex items-center gap-2 font-light border-2 border-white/10">
            {children}
        </div>
    );
}
