"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";
import {
    ClockIcon,
    CodeIcon,
    FileTextIcon,
    GlobeIcon,
    HandshakeIcon,
    ShieldCheckIcon,
} from "lucide-react";

const faqItems = [
    {
        key: "1",
        question: "Quais minhas principais tecnologias?",
        icon: CodeIcon,
        answer: (
            <>
                Costumo usar muito o combo NextJS (Frontend) e NestJS (Backend)
                que funcionam muito bem juntos para dar{" "}
                <strong className="underline">
                    mais velocidade de desenvolvimento, performance e
                    flexibilidade.
                </strong>
            </>
        ),
    },
    {
        key: "2",
        question: "Você também trabalha em projetos simples?",
        icon: ClockIcon,
        answer: (
            <>
                Sim, trabalho em projetos curtos/simples e em projetos
                longos/complexos.{" "}
                <strong className="underline">
                    Mesmo em projetos simples, eu consigo adaptar e criar a
                    melhor solução.
                </strong>
            </>
        ),
    },
    {
        key: "3",
        question: "Só trabalha com desenvolvimento web?",
        icon: GlobeIcon,
        answer: (
            <>
                Não. Meu foco é o desenvolvimento web, mas também consigo
                adaptar seu site a um aplicativo desktop ou mobile.{" "}
                <strong className="underline">
                    Você pode contar comigo para te ajudar a implementar isso.
                </strong>
            </>
        ),
    },
    {
        key: "4",
        question: "O que você entrega no final do projeto?",
        icon: ShieldCheckIcon,
        answer: (
            <>
                No final do projeto, eu entrego o projeto completo, com todas as
                funcionalidades implementadas, com um bom design e segurança.
                Além disso, eu entrego o projeto no ar já configurado e pronto
                para uso, código-fonte e todos os arquivos necessários para o
                projeto.{" "}
                <strong className="underline">
                    E o diferencial é que eu te entrego 30 dias de suporte
                    gratuito após a entrega.
                </strong>
            </>
        ),
    },
    {
        key: "5",
        question: "Você trabalha sob contrato?",
        icon: FileTextIcon,
        answer: (
            <>
                Sim,{" "}
                <strong className="underline">
                    para manter a transparência e garantir a qualidade do
                    projeto para ambos os lados
                </strong>
                , eu trabalho sob contrato.
            </>
        ),
    },
    {
        key: "6",
        question: "Você sabe trabalhar em equipe ou apenas individualmente?",
        icon: HandshakeIcon,
        answer: (
            <>
                Ambos,{" "}
                <strong className="underline">
                    gosto muito de trabalhar em equipe
                </strong>{" "}
                e também gosto de trabalhar individualmente.
            </>
        ),
    },
];

export function FAQ() {
    return (
        <motion.div
            className="md:max-w-full md:w-auto max-w-full w-full"
            initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: 0.4,
                    staggerChildren: 0.1,
                }}
            >
                <Accordion
                    variant="splitted"
                    itemClasses={{
                        base: "bg-background border-b border-content4 rounded-none max-w-full",
                    }}
                >
                    {faqItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <AccordionItem
                                key={item.key}
                                aria-label={item.question}
                                title={
                                    <motion.span
                                        initial={{
                                            opacity: 0,
                                            x: index % 2 === 0 ? -30 : 30,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.6 + index * 0.15,
                                            ease: "easeOut",
                                        }}
                                        whileHover={{
                                            color: "rgb(156 163 175)",
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        {item.question}
                                    </motion.span>
                                }
                                startContent={
                                    <motion.div
                                        initial={{
                                            rotate: -180,
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            rotate: 0,
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.8 + index * 0.15,
                                            ease: "backOut",
                                        }}
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.2,
                                            transition: {
                                                duration: 0.5,
                                                ease: "backOut",
                                            },
                                        }}
                                    >
                                        <IconComponent className="size-4 text-content4" />
                                    </motion.div>
                                }
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                >
                                    {item.answer}
                                </motion.div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </motion.div>
        </motion.div>
    );
}
