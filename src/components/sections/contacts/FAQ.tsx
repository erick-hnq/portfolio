"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import {
    ClockIcon,
    CodeIcon,
    FileTextIcon,
    GlobeIcon,
    HandshakeIcon,
    ShieldCheckIcon,
} from "lucide-react";

export function FAQ() {
    return (
        <div className="md:max-w-full md:w-auto max-w-full w-full">
            <Accordion
                variant="splitted"
                itemClasses={{
                    base: "bg-background border-b border-content4 rounded-none max-w-full",
                }}
            >
                <AccordionItem
                    key="1"
                    aria-label="Quais minhas principais tecnologias?"
                    title="Quais minhas principais tecnologias?"
                    startContent={<CodeIcon className="size-4 text-content4" />}
                >
                    Costumo usar muito o combo NextJS (Frontend) e NestJS
                    (Backend) que funcionam muito bem juntos para dar{" "}
                    <strong className="underline">
                        mais velocidade de desenvolvimento, performance e
                        flexibilidade.
                    </strong>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Você também trabalha em projetos simples?"
                    title="Você também trabalha em projetos simples?"
                    startContent={
                        <ClockIcon className="size-4 text-content4" />
                    }
                >
                    Sim, trabalho em projetos curtos/simples e em projetos
                    longos/complexos.{" "}
                    <strong className="underline">
                        Mesmo em projetos simples, eu consigo adaptar e criar a
                        melhor solução.
                    </strong>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Só trabalha com desenvolvimento web?"
                    title="Só trabalha com desenvolvimento web?"
                    startContent={
                        <GlobeIcon className="size-4 text-content4" />
                    }
                >
                    Não. Meu foco é o desenvolvimento web, mas também consigo
                    adaptar seu site a um aplicativo desktop ou mobile.{" "}
                    <strong className="underline">
                        Você pode contar comigo para te ajudar a implementar
                        isso.
                    </strong>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="O que você entrega no final do projeto?"
                    title="O que você entrega no final do projeto?"
                    startContent={
                        <ShieldCheckIcon className="size-4 text-content4" />
                    }
                >
                    No final do projeto, eu entrego o projeto completo, com
                    todas as funcionalidades implementadas, com um bom design e
                    segurança. Além disso, eu entrego o projeto no ar já
                    configurado e pronto para uso, código-fonte e todos os
                    arquivos necessários para o projeto.{" "}
                    <strong className="underline">
                        E o diferencial é que eu te entrego 30 dias de suporte
                        gratuito após a entrega.
                    </strong>
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label="Você trabalha sob contrato?"
                    title="Você trabalha sob contrato?"
                    startContent={
                        <FileTextIcon className="size-4 text-content4" />
                    }
                >
                    Sim,{" "}
                    <strong className="underline">
                        para manter a transparência e garantir a qualidade do
                        projeto para ambos os lados
                    </strong>
                    , eu trabalho sob contrato.
                </AccordionItem>
                <AccordionItem
                    key="6"
                    aria-label="Você sabe trabalhar em equipe ou apenas individualmente?"
                    title="Você sabe trabalhar em equipe ou apenas individualmente?"
                    startContent={
                        <HandshakeIcon className="size-4 text-content4" />
                    }
                >
                    Ambos,{" "}
                    <strong className="underline">
                        gosto muito de trabalhar em equipe
                    </strong>{" "}
                    e também gosto de trabalhar individualmente.
                </AccordionItem>
            </Accordion>
        </div>
    );
}
