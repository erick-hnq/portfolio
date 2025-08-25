"use client";

import { NAV_ITEMS } from "@/data/nav-items.data";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";

export function Nav() {
    const pathname = usePathname();

    return (
        <nav className="text-white text-sm flex gap-4">
            {NAV_ITEMS.map((item) => (
                <NavItem
                    key={item.href}
                    href={item.href}
                    isActive={pathname === item.href}
                >
                    {item.label}
                </NavItem>
            ))}
        </nav>
    );
}
