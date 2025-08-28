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
            className="font-semibold inline-flex relative underline"
        >
            {children}
        </motion.strong>
    );
}
