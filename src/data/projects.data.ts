import { Project } from "@/models/interfaces/project.interface";

export const projects: Project[] = [
    {
        title: "Click Mão de Obra",
        description:
            "A plataforma Click Mão de Obra é um SaaS que permite aos usuários contratar serviços de mão de obra de forma rápida e segura na cidade de Rondonópolis/MT. Infelizmente a plataforma foi descontinuada em cerca de 30% do seu desenvolvimento por motivos financeiros. Caso queira dar continuidade ao projeto, entre em contato comigo, para podermos personalizar o projeto para você.",
        role: "Desenvolvedor Fullstack - Projeto descontinuado",
        tags: [
            "NextJS",
            "NestJS",
            "PostgreSQL",
            "TypeScript",
            "TailwindCSS",
            "Mercado Pago",
        ],
        videoSrc:
            "https://res.cloudinary.com/de7dqidkr/video/upload/v1762271158/click-mao-de-obra_g4p04v.mp4",
        color: "bg-[#1069D7]",
    },
    {
        title: "Ponto PEI",
        description:
            "Criei o SaaS Ponto PEI — a primeira plataforma do nicho de apoio ao Atendimento Educacional Especializado (AEE) para elaboração, revisão e aplicação de PEIs com suporte de Inteligência Artificial. Desenvolvi frontend em Next.js, backend em NestJS e TypeScript com deploy em Vercel/Railway e integração de pagamentos via Stripe. A solução automatiza e personaliza planos educacionais para aumentar a eficiência de professores e equipes pedagógicas.",
        role: "Desenvolvedor Fullstack",
        tags: [
            "NextJS",
            "NestJS",
            "PostgreSQL",
            "TypeScript",
            "TailwindCSS",
            "Vercel",
            "Railway",
            "Stripe",
            "IA",
        ],
        videoSrc:
            "https://res.cloudinary.com/de7dqidkr/video/upload/v1762029338/ponto-pei_bnq8io.mp4",
        website: "https://www.pontopei.com.br/",
        color: "bg-[#2B7FFF]",
    },
    {
        title: "Infinity Chats",
        description:
            "Desenvolvi o Infinity Chat, um chatbot de IA para atendimento via WhatsApp voltado a provedores. Coordenei front-end (NextJS), back-end (NestJS) e infraestrutura (PostgreSQL, MongoDB, Redis, Docker, Railway) para operação estável, integrei sistemas legados, implementei envio em massa e um painel intuitivo. A solução automatiza cobrança, abertura de ocorrências e roteamento com respostas contextuais, reduzindo trabalho manual e acelerando atendimentos.",
        role: "Desenvolvedor Fullstack",
        tags: [
            "NextJS",
            "NestJS",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion",
            "IA",
            "Railway",
        ],
        website: "https://www.infinitychats.com/",
        color: "bg-[#16A34A]",
        videoSrc:
            "https://res.cloudinary.com/de7dqidkr/video/upload/v1762029340/infinity-chats_vurwme.mp4",
    },
    {
        title: "Infinity Chats - Painel de Atendimentos",
        description:
            'Desenvolvi um painel de atendimentos integrado ao Infinity Chat que permite aos operadores monitorar em tempo real o que a IA está realizando e intervir quando necessário — enviar faturas, desbloquear clientes e executar ações manuais. O painel suporta áudio, arquivos e texto, com organização de conversas em "Ao vivo", "Aguardando" e "Atendendo", facilitando acompanhamento, transferência e histórico completo das interações.',
        role: "Desenvolvedor Fullstack",
        tags: [
            "NextJS",
            "NestJS",
            "PostgreSQL",
            "Docker",
            "Socket.io",
            "AWS S3",
            "TypeScript",
            "TailwindCSS",
            "IA",
            "Railway",
        ],
        website: "https://www.infinitychats.com/attendants/auth/sign-in",
        color: "bg-[#16A34A]",
        videoSrc:
            "https://res.cloudinary.com/de7dqidkr/video/upload/v1762029336/infinity-chats-attendants_tiiuaf.mp4",
    },
];
