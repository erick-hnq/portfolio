"use client";

import { NAV_ITEMS } from "@/data/nav-items.data";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "../shared/Logo";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Navbar
            position="sticky"
            className="z-10 inset-0 flex justify-between items-center bg-white/5 border-2 border-white/10 backdrop-blur-sm rounded-full max-w-5xl mx-auto sm:mt-10 mt-5"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {NAV_ITEMS.map((item) => (
                    <NavbarItem
                        isActive={pathname === item.href}
                        key={item.href}
                        className="relative data-[active=true]:font-normal group"
                    >
                        <Link className="text-sm" href={item.href}>
                            {item.label}
                        </Link>
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary w-0 group-data-[active=true]:w-full transition-all duration-300 group-hover:w-full" />
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu className="mt-5">
                {NAV_ITEMS.map((item, index) => (
                    <NavbarMenuItem
                        isActive={pathname === item.href}
                        key={`${item}-${index}`}
                        className="relative data-[active=true]:font-normal group"
                    >
                        <Link className="w-full" href={item.href}>
                            {item.label}
                        </Link>
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary w-0 group-data-[active=true]:w-full transition-all duration-300 group-hover:w-full" />
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
