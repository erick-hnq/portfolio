"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";
import { BlocksIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import GithubIcon from "@/components/icons/GithubIcon";

interface YourProjectCardProps {
    index?: number;
}

export function YourProjectCard({ index = 0 }: YourProjectCardProps) {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="sm:max-w-[500px] max-w-[400px] w-full"
        >
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut",
                }}
                className="w-full sm:h-64 h-48 bg-content2 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer"
            >
                <div className="absolute inset-0 bg-gradient-to-tl from-background to-white/10" />
                <div className="flex flex-col items-center justify-center gap-3 z-10">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BlocksIcon strokeWidth={1} className="size-10 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                    </motion.div>
                    <span className="text-white/30 group-hover:text-white/60 text-sm font-medium transition-colors duration-300">
                        SEU PROJETO, SUA IDEIA
                    </span>
                </div>
            </motion.div>

            <motion.div
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut",
                }}
                className="w-full"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.6,
                        ease: "easeOut",
                    }}
                    className="text-2xl my-3"
                >
                    Seu projeto aqui
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.7,
                        ease: "easeOut",
                    }}
                    className="mb-2 font-semibold text-default-700"
                >
                    Seu Desenvolvedor Fullstack
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.8,
                        ease: "easeOut",
                    }}
                    className="w-full text-justify text-sm"
                >
                    Tem uma ideia incrível? Vamos transformá-la em realidade juntos. Desde
                    a concepção até o deploy, ofereço uma parceria completa — com foco em
                    qualidade, performance e experiência do usuário. Entre em contato e
                    construíremos algo extraordinário.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.9,
                    }}
                    className="flex flex-wrap gap-2 my-3"
                >
                    {[
                        "Criatividade",
                        "Design",
                        "Flexibilidade",
                        "Inovação",
                        "Parceria",
                        "Performance",
                        "Tecnologia",
                    ].map((tag, tagIndex) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.2 + 1.0 + tagIndex * 0.05,
                                ease: "backOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="bg-content2 rounded-full py-1 px-3 text-[0.6rem]"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 1.2,
                    ease: "easeOut",
                }}
                className="flex gap-2"
            >

                <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Tooltip content="Ver meu trabalho">
                        <Link href="https://github.com/erickcelio" target="_blank">
                            <Button size="sm" className="bg-content2 ">
                                <GithubIcon />
                                GitHub
                            </Button>
                        </Link>
                    </Tooltip>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Tooltip content="Fale comigo">
                        <Link href="#contacts">
                            <Button
                                size="sm"
                                color="primary"
                            >
                                <PhoneIcon className="size-4" />
                                Vamos conversar
                            </Button>
                        </Link>
                    </Tooltip>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
