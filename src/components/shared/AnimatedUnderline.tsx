"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedUnderline({ children }: { children: ReactNode }) {
    return (
        <motion.strong
            viewport={{ once: true, amount: 0.5 }}
            initial={{ filter: "brightness(0.5)" }}
            animate={{ filter: "brightness(1)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-semibold inline-flex relative"
        >
            {children}
            <motion.span
                viewport={{ once: true, amount: 0.5 }}
                className="absolute bottom-0 left-0 w-auto h-px bg-white/50 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
            />
        </motion.strong>
    );
}
