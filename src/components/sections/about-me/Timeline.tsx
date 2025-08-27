"use client";
import { motion } from "framer-motion";
import { Brain, Code, PencilRuler, ShieldCheck } from "lucide-react";

export function Timeline() {
    const steps = [
        {
            id: 1,
            title: "Planejamento",
            icon: Brain,
            description:
                "Para criar algo incrível, é preciso primeiro falar sobre os detalhes. O planejamento é essencial.",
            side: "left",
        },
        {
            id: 2,
            title: "Wireframe/Design",
            icon: PencilRuler,
            description:
                "O wireframe é a estrutura básica do projeto. O design é a cara do projeto.",
            side: "right",
        },
        {
            id: 3,
            title: "Desenvolvimento",
            icon: Code,
            description:
                "O desenvolvimento é a parte que torna o projeto real. É a parte que torna o projeto funcional.",
            side: "left",
        },
        {
            id: 4,
            title: "Garantia de Qualidade",
            icon: ShieldCheck,
            description:
                "A garantia de qualidade é a parte que garante que o projeto funcione corretamente e seja de alta qualidade/performance.",
            side: "right",
        },
    ];

    return (
        <div className="text-white overflow-hidden w-full">
            <div className="max-w-6xl mx-auto">
                <div className="relative">
                    {/* Linha central vertical */}
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%_+_100px)] bg-white/30"
                    ></motion.div>

                    {/* Steps */}
                    <div className="space-y-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    viewport={{ once: true }}
                                    key={step.id}
                                    className="relative overflow-hidden"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.8 * (index + 1),
                                    }}
                                >
                                    {/* Card - posicionado primeiro para definir a altura */}
                                    <div
                                        className={`flex mt-10 ${
                                            step.side === "right"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`w-5/12 ${
                                                step.side === "right"
                                                    ? "pl-16"
                                                    : "pr-16"
                                            }`}
                                        >
                                            <div className="p-[1px] bg-gradient-to-br from-white/10 via-white/50 to-white/10 rounded-xl">
                                                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 relative">
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
                                                        initial={{ width: 0 }}
                                                        animate={{
                                                            width:
                                                                step.side ===
                                                                "right"
                                                                    ? "calc(4rem + 25.6%)"
                                                                    : "calc(4rem + 25.6%)",
                                                        }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay:
                                                                0.8 *
                                                                (index + 1),
                                                        }}
                                                        className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-white/40 ${
                                                            step.side ===
                                                            "right"
                                                                ? "-left-[calc(4rem_+_25.6%)]"
                                                                : "-right-[calc(4rem_+_25.6%)]"
                                                        }`}
                                                        style={{
                                                            width:
                                                                step.side ===
                                                                "right"
                                                                    ? "calc(4rem + 25.6%)"
                                                                    : "calc(4rem + 25.6%)",
                                                        }}
                                                    >
                                                        {/* Ponto de conexão no card */}
                                                        <div
                                                            className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full ${
                                                                step.side ===
                                                                "right"
                                                                    ? "right-0"
                                                                    : "left-0"
                                                            }`}
                                                        ></div>
                                                        {/* Ponto de conexão na linha central */}
                                                        <div
                                                            className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full ${
                                                                step.side ===
                                                                "right"
                                                                    ? "left-0"
                                                                    : "right-0"
                                                            }`}
                                                        ></div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
