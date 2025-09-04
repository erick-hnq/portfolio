import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@heroui/theme";
import type { Metadata } from "next";
import { Great_Vibes, Poppins } from "next/font/google";
import "./globals.css";
import RootProviders from "./providers";

const poppinsSans = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-great-vibes",
});

export const metadata: Metadata = {
    title: "Erick Henrique | Portfolio",
    description:
        "Olá me chamo Erick Henrique e sou desenvolvedor fullstack web e este é meu portfólio profissional.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="dark">
            <body
                className={cn(
                    "antialiased min-h-screen bg-black font-sans px-4",
                    poppinsSans.className,
                    greatVibes.variable
                )}
            >
                <RootProviders>
                    <Header />
                    {children}
                    <Footer />
                </RootProviders>
            </body>
        </html>
    );
}
