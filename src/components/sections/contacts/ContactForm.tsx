"use client";

import { CopyButton } from "@/components/shared/CopyButton";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Nome é obrigatório" })
        .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
    email: z
        .email({ message: "Email inválido" })
        .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
    message: z
        .string()
        .min(1, { message: "Mensagem é obrigatória" })
        .max(2000, { message: "Mensagem deve ter no máximo 2000 caracteres" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormData) {
        const response = await fetch("/api/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.log(await response.text());
            return;
        }

        addToast({
            title: "E-mail enviado com sucesso!",
            description:
                "Obrigado por entrar em contato, logo irei te responder!",
            color: "success",
        });
    }

    return (
        <motion.div
            className="flex flex-col gap-4 w-full"
            initial={{
                opacity: 0,
                y: 50,
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
            <motion.p
                className="max-w-full text-white/50 text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: 1.2,
                    ease: "easeOut",
                }}
            >
                Estou disponível para{" "}
                <motion.strong
                    className="text-white/70 underline"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: 1.4,
                    }}
                    whileHover={{
                        color: "rgb(255 255 255 / 0.9)",
                        transition: { duration: 0.2 },
                    }}
                >
                    {" "}
                    conversar sobre projetos, ideias, oportunidades ou apenas
                    uma conversa amistosa.{" "}
                </motion.strong>{" "}
                Estou ansioso para ouvir suas ideias e trabalhar juntos para
                criar soluções incríveis.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: 1.6,
                    ease: "easeOut",
                }}
            >
                <Input
                    readOnly
                    value={"contact@erickdev.site"}
                    label="Meu E-mail"
                    endContent={<CopyButton text={"contact@erickdev.site"} />}
                />
            </motion.div>
            <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: 1.8,
                    ease: "easeOut",
                }}
            >
                <motion.div
                    className="w-full h-px bg-content4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 2.0,
                        ease: "easeOut",
                    }}
                />
                <motion.span
                    className="text-sm text-content4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: 2.2,
                        ease: "backOut",
                    }}
                >
                    OU
                </motion.span>
                <motion.div
                    className="w-full h-px bg-content4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 2.0,
                        ease: "easeOut",
                    }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 2.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                <Form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 2.6,
                            ease: "easeOut",
                        }}
                    >
                        <Controller
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    isRequired
                                    errorMessage={fieldState.error?.message}
                                    isInvalid={fieldState.invalid}
                                    validationBehavior="aria"
                                    label="Nome"
                                />
                            )}
                        />
                    </motion.div>
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 2.8,
                            ease: "easeOut",
                        }}
                    >
                        <Controller
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    isRequired
                                    errorMessage={fieldState.error?.message}
                                    isInvalid={fieldState.invalid}
                                    validationBehavior="aria"
                                    label="E-mail"
                                />
                            )}
                        />
                    </motion.div>
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 3.0,
                            ease: "easeOut",
                        }}
                    >
                        <Controller
                            control={form.control}
                            name="message"
                            render={({ field, fieldState }) => (
                                <Textarea
                                    {...field}
                                    isRequired
                                    errorMessage={fieldState.error?.message}
                                    isInvalid={fieldState.invalid}
                                    validationBehavior="aria"
                                    label="Mensagem"
                                />
                            )}
                        />
                    </motion.div>
                    <motion.div
                        className="w-full flex justify-between items-center"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 2.2,
                            ease: "backOut",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            size="lg"
                            variant="shadow"
                            color="primary"
                            type="submit"
                            className="w-10/12 h-14 mx-auto"
                            radius="full"
                            isLoading={form.formState.isSubmitting}
                            startContent={
                                form.formState.isSubmitting ? null : (
                                    <SendIcon className="size-4" />
                                )
                            }
                        >
                            Enviar
                        </Button>
                    </motion.div>
                </Form>
            </motion.div>
        </motion.div>
    );
}
