"use client";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

export default function RootProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <HeroUIProvider>
            <ToastProvider />
            {children}
        </HeroUIProvider>
    );
}
