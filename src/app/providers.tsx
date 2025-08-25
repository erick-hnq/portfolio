"use client";

import { HeroUIProvider } from "@heroui/react";

export default function RootProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return <HeroUIProvider>{children}</HeroUIProvider>;
}
