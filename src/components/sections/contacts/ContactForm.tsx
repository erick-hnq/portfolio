"use client";

import { CopyButton } from "@/components/shared/CopyButton";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { HandIcon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.email({ message: "Email inválido" }),
    message: z.string().min(1, { message: "Mensagem é obrigatória" }),
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

    async function onSubmit(data: ContactFormData) {}

    return (
        <div className="flex flex-col gap-4 w-full md:w-[800px]">
            <div className="flex items-center gap-3 relative">
                <HandIcon className="size-8 font-bold tracking-tight mb-2 rotate-12" />
                <h1 className="text-4xl font-bold tracking-tight mb-2">
                    Fale Comigo
                </h1>
                <div className="h-px w-full bg-content4 absolute bottom-0 left-0" />
            </div>
            <p className="md:max-w-lg max-w-full text-white/50 text-justify">
                Estou disponível para{" "}
                <strong className="text-white/70 underline">
                    {" "}
                    conversar sobre projetos, ideias, oportunidades ou apenas
                    uma conversa amistosa.{" "}
                </strong>{" "}
                Estou ansioso para ouvir suas ideias e trabalhar juntos para
                criar soluções incríveis.
            </p>
            <div>
                <Input
                    readOnly
                    value={"erickcontato012@gmail.com"}
                    label="Meu E-mail"
                    endContent={
                        <CopyButton text={"erickcontato012@gmail.com"} />
                    }
                />
            </div>
            <div className="flex items-center gap-2">
                <div className="w-full h-px bg-content4" />
                <span className="text-sm text-content4">OU</span>
                <div className="w-full h-px bg-content4" />
            </div>
            <Form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Button
                    size="lg"
                    variant="shadow"
                    color="primary"
                    type="submit"
                    className="w-10/12 mx-auto"
                    radius="sm"
                    isLoading={form.formState.isSubmitting}
                    startContent={<SendIcon className="size-4" />}
                >
                    Enviar
                </Button>
            </Form>
        </div>
    );
}
