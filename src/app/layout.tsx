import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@heroui/theme";
import type { Metadata, Viewport } from "next";
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
    metadataBase: new URL("https://erickdev.site"),
    title: "Erick Henrique | Portfolio",
    description:
        "Portfolio profissional de Erick Henrique - Desenvolvedor Fullstack especializado em React, Next.js, NestJS e TypeScript.",
    keywords: [
        "desenvolvedor fullstack",
        "react",
        "nextjs",
        "nestjs",
        "typescript",
        "javascript",
        "portfolio",
        "web developer",
        "frontend",
        "backend",
        "erickdev",
        "erick-hnq",
        "erick henrique",
    ],
    authors: [{ name: "Erick Henrique", url: "https://erickdev.com" }],
    creator: "Erick Henrique",
    publisher: "Erick Henrique",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://erickdev.site",
        title: "Erick Henrique | Desenvolvedor Fullstack",
        description:
            "Portfolio profissional de Erick Henrique - Desenvolvedor Fullstack especializado em React, Next.js, NestJS e TypeScript.",
        siteName: "Erick Henrique Portfolio",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Erick Henrique - Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Erick Henrique | Desenvolvedor Fullstack",
        description:
            "Portfolio profissional de Erick Henrique - Desenvolvedor Fullstack especializado em React, Next.js, NestJS e TypeScript.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "/",
    },
};

export const viewport: Viewport = {
    themeColor: "#000",
    width: "device-width",
    initialScale: 1,
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
