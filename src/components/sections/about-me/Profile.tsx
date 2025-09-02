"use client";

import { SocialButtonsGroup } from "@/components/shared/SocialButtonsGroup";
import { Avatar } from "@heroui/avatar";
import { motion } from "framer-motion";

export function Profile() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -30,
                scale: 0.95,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="sticky top-16 z-10 flex sm:flex-row flex-col items-center justify-between gap-4 bg-gradient-to-b from-content2 to-transparent backdrop-blur-sm p-4 rounded-xl rounded-b-none"
        >
            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: "easeOut",
                }}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        rotate: -180,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: "backOut",
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Avatar
                        fallback
                        className="w-20 h-20 text-large shadow shadow-primary/50"
                        src="https://github.com/erick-hnq.png"
                    />
                </motion.div>
                <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <div className="flex flex-wrap-reverse gap-2 items-center">
                        <motion.h1
                            className="text-white text-2xl font-semibold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 1.0,
                                ease: "easeOut",
                            }}
                        >
                            Erick - 20 anos
                        </motion.h1>
                        <div className="bg-green-600/50 py-1 px-3 border border-green-500 rounded-full flex justify-between items-center gap-2">
                            <div className="relative w-1.5 h-1.5 bg-green-500 rounded-full flex justify-center items-center">
                                <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping" />
                            </div>
                            <span className="text-xs text-green-500">
                                Disponível
                            </span>
                        </div>
                    </div>
                    <motion.p
                        className="text-white/50 text-sm"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 1.2,
                            ease: "easeOut",
                        }}
                    >
                        Desenvolvedor Fullstack
                    </motion.p>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                <SocialButtonsGroup className="sm:self-start self-center" />
            </motion.div>
        </motion.div>
    );
}
