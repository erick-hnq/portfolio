import { Project } from "@/models/interfaces/project.interface";

export const projects: Project[] = [
    {
        title: "Ponto PEI",
        description:
            "A Plataforma Ponto PEI é um sistema inteligente de apoio ao Atendimento Educacional Especializado (AEE), voltado para escolas, professores e equipes pedagógicas que desejam elaborar, revisar e aplicar Planos Educacionais Individualizados (PEI) com o suporte de Inteligência Artificial.",
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
        title: "Infinity Chat",
        description:
            "A Plataforma Ponto PEI é um sistema inteligente de apoio ao Atendimento Educacional Especializado (AEE), voltado para escolas, professores e equipes pedagógicas que desejam elaborar, revisar e aplicar Planos Educacionais Individualizados (PEI) com o suporte de Inteligência Artificial.",
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
        ],
        website: "https://www.pontopei.com.br/",
        color: "bg-[#2B7FFF]",
        carousel: [
            {
                imageSrc:
                    "https://opengraph.githubassets.com/1/erick-hnq/study",
                alt: "Teste",
            },
            {
                imageSrc:
                    "https://opengraph.githubassets.com/1/erick-hnq/study",
                alt: "Teste 2",
            },
        ],
    },
];
