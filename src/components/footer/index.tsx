"use client";

import { motion } from "framer-motion";
import { Logo } from "../shared/Logo";
import { SocialButtonsGroup } from "../shared/SocialButtonsGroup";

export function Footer() {
    return (
        <motion.footer
            className="flex sm:flex-row flex-col-reverse  sm:justify-between justify-center gap-5 items-center p-5 border-t-2 border-primary mt-30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <motion.p
                className="text-white/70 sm:text-sm text-xs text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: "-50px" }}
            >
                2025 Erick Henrique. Todos direitos reservados.
            </motion.p>
            <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: "backOut",
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Logo />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "200px" }}
                >
                    <SocialButtonsGroup />
                </motion.div>
            </motion.div>
        </motion.footer>
    );
}
