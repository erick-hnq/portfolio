import { cn } from "@heroui/react";
import Link from "next/link";

interface NavItemProps {
    children: React.ReactNode;
    href: string;
    isActive?: boolean;
}

export function NavItem({ children, href, isActive }: NavItemProps) {
    return (
        <Link
            href={href}
            className="text-white text-sm flex items-center gap-2 group"
        >
            <div
                className={cn(
                    "w-1 h-1 bg-transparent rounded-full transition-all duration-300 group-hover:bg-primary",
                    isActive && "bg-primary"
                )}
            />
            {children}
        </Link>
    );
}
