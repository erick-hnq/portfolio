import { Project } from "@/models/interfaces/project.interface";

export const projects: Project[] = [
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
        videoSrc: "/videos/ponto-pei.mp4",
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
        videoSrc: "/videos/infinity-chats.mp4",
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
        videoSrc: "/videos/infinity-chats-attendants.mp4",
    },
    {
        title: "Portfolio",
        description:
            "Esse é o meu portfolio, onde você pode ver meus projetos e tecnologias que eu uso. Também pode saber mais sobre mim, meus contatos e algumas perguntas frequentes. Esse projeto foi feito com NextJS e TailwindCSS, as animações fiz usando o Framer Motion e hospedado na Vercel.",
        role: "Desenvolvedor Fullstack",
        tags: ["NextJS", "TailwindCSS", "Framer Motion", "HeroUI", "Vercel"],
        website: "https://erickdev.site",
        color: "bg-[#FFF] text-[#000]",
        github: "https://github.com/erick-hnq/portfolio",
        videoSrc: "/videos/portfolio.mp4",
    },
];
