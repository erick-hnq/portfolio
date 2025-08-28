"use client";
import CursorIcon from "@/components/icons/CursorIcon";
import FigmaIcon from "@/components/icons/FigmaIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import GitIcon from "@/components/icons/GitIcon";
import { LighthouseIcon } from "@/components/icons/LighthouseIcon";
import NotionIcon from "@/components/icons/NotionIcon";
import { cn } from "@heroui/react";
import { Tooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";
import {
    Brain,
    BrainIcon,
    Code,
    PencilRuler,
    ScanSearchIcon,
    ShieldCheck,
    SparklesIcon,
    TriangleIcon,
} from "lucide-react";
import Link from "next/link";

const steps = [
    {
        id: 1,
        title: "Planejamento",
        icon: Brain,
        description:
            "Para criar algo incrível, é preciso primeiro falar sobre os detalhes. O planejamento é essencial.",
        side: "left",
        apps: [
            {
                name: "GitHub",
                icon: <GithubIcon />,
                href: "https://github.com/",
            },
            {
                name: "Notion",
                icon: <NotionIcon />,
                href: "https://www.notion.com/",
            },
            {
                name: "Inteligência Artificial",
                icon: <SparklesIcon className="size-4" />,
                href: "#",
            },
        ],
    },
    {
        id: 2,
        title: "Wireframe/Design",
        icon: PencilRuler,
        description:
            "O wireframe é a estrutura básica do projeto. O design é a cara do projeto.",
        side: "right",
        apps: [
            {
                name: "Figma",
                icon: <FigmaIcon />,
                href: "https://www.figma.com/",
            },
            {
                name: "Criatividade",
                icon: <BrainIcon className="size-4" />,
                href: "#",
            },
            {
                name: "Inteligência Artificial",
                icon: <SparklesIcon className="size-4" />,
                href: "#",
            },
        ],
    },
    {
        id: 3,
        title: "Desenvolvimento",
        icon: Code,
        description:
            "O desenvolvimento é a parte que torna o projeto real. É a parte que torna o projeto funcional.",
        side: "left",
        apps: [
            {
                name: "Cursor",
                icon: <CursorIcon />,
                href: "https://www.cursor.com/",
            },
            {
                name: "Git",
                icon: <GitIcon />,
                href: "https://www.git-scm.com/",
            },
            {
                name: "Github",
                icon: <GithubIcon />,
                href: "https://github.com/",
            },
        ],
    },
    {
        id: 4,
        title: "Garantia de Qualidade",
        icon: ShieldCheck,
        description:
            "A garantia de qualidade é a parte que garante que o projeto funcione corretamente e seja de alta qualidade/performance.",
        side: "right",
        apps: [
            {
                name: "Github (Verificação de Bugs)",
                icon: <GithubIcon />,
                href: "https://github.com/",
            },
            {
                name: "Lighthouse (Performance)",
                icon: <LighthouseIcon />,
                href: "https://developer.chrome.com/docs/lighthouse/overview?hl=pt-br",
            },
            {
                name: "Revisão de Código",
                icon: <ScanSearchIcon className="size-4" />,
                href: "#",
            },
        ],
    },
];

export function WhatIDoTimeline() {
    return (
        <div className="text-white  w-full">
            <div className="max-w-6xl mx-auto">
                <div className="relative">
                    {/* Linha central vertical */}
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 3, delay: 0.5 }}
                        className="sm:block hidden absolute left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%_+_100px)] bg-white/30"
                    >
                        <TriangleIcon className="size-4 rotate-180 absolute -bottom-0 fill-white/30 backdrop-blur-md text-white/30 left-1/2 transform -translate-x-1/2" />
                    </motion.div>

                    {/* Steps */}
                    <div className="sm:space-y-10 space-y-5">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.id}
                                    className="relative sm:h-80 h-auto"
                                >
                                    <motion.div
                                        viewport={{ once: true }}
                                        className="sticky top-10 overflow-hidden"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 * (index + 1),
                                        }}
                                    >
                                        {/* Card - posicionado primeiro para definir a altura */}
                                        <div
                                            className={cn(
                                                "flex flex-col mt-10",
                                                step.side === "right"
                                                    ? "sm:items-end items-center"
                                                    : "sm:items-start items-center"
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "w-full sm:w-1/2",
                                                    step.side === "right"
                                                        ? "sm:pl-16 pl-0"
                                                        : "sm:pr-16 pr-0"
                                                )}
                                            >
                                                <div className="p-[1px] bg-gradient-to-br from-white/10 via-white/50 to-white/10 rounded-xl">
                                                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 relative flex flex-col justify-between">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <Icon className="w-5 h-5 text-white/70" />
                                                            <h3 className="font-semibold text-lg">
                                                                {step.id}.{" "}
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                        <p className="text-white/70 text-sm leading-relaxed">
                                                            {step.description}
                                                        </p>

                                                        {/* Linha horizontal - vai do card até a linha central */}
                                                        <motion.div
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            initial={{
                                                                opacity: 0,
                                                                width: 0,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                width: "4.4em",
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    0.8 *
                                                                    (index + 1),
                                                            }}
                                                            className={cn(
                                                                "absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-white/40 sm:block hidden",
                                                                step.side ===
                                                                    "right"
                                                                    ? "-left-[4.4em]"
                                                                    : "-right-[4.4em]"
                                                            )}
                                                        >
                                                            {/* Ponto de conexão no card */}
                                                            <div
                                                                className={cn(
                                                                    "absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full",
                                                                    step.side ===
                                                                        "right"
                                                                        ? "right-0"
                                                                        : "left-0"
                                                                )}
                                                            ></div>
                                                            {/* Ponto de conexão na linha central */}
                                                            <div
                                                                className={cn(
                                                                    "absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full",
                                                                    step.side ===
                                                                        "right"
                                                                        ? "left-0"
                                                                        : "right-0"
                                                                )}
                                                            ></div>
                                                        </motion.div>

                                                        <div className="mt-5 flex items-center gap-2">
                                                            {step.apps?.map(
                                                                (app) => (
                                                                    <Tooltip
                                                                        key={
                                                                            app.name
                                                                        }
                                                                        content={
                                                                            app.name
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                app.href
                                                                            }
                                                                            className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:scale-110 transition-all cursor-pointer"
                                                                        >
                                                                            {
                                                                                app.icon
                                                                            }
                                                                        </Link>
                                                                    </Tooltip>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
