"use client";

import GithubIcon from "@/components/icons/GithubIcon";
import Carousel from "@/components/ui/Carousel/Carousel";
import { Project } from "@/models/interfaces/project.interface";
import { Button } from "@heroui/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@heroui/modal";
import { cn } from "@heroui/react";
import { Tooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <motion.div
            initial={{ filter: "blur(20px)", y: 100 }}
            whileInView={{ filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:max-w-[500px] max-w-[300px] w-full"
        >
            <div className="w-full sm:h-64 h-40 bg-content2 rounded-xl cursor-zoom-in relative overflow-hidden group">
                <div
                    onClick={onOpen}
                    className="inset-0 absolute h-full w-full group-hover:opacity-30 opacity-0 bg-gradient-to-r from-black from-10% via-transparent to-black to-90% transition-all duration-300"
                />
                {project.videoSrc ? (
                    <video
                        src={project.videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                    />
                ) : (
                    <div>
                        <div className="sm:block hidden">
                            <Carousel
                                cardOnClick={() => onOpenChange()}
                                items={project.carousel}
                                baseWidth={500}
                                autoplay={true}
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={false}
                                round={false}
                            />
                        </div>
                        <div className="sm:hidden block">
                            <Carousel
                                cardOnClick={() => onOpenChange()}
                                items={project.carousel}
                                baseWidth={300}
                                autoplay={true}
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={false}
                                round={false}
                            />
                        </div>
                    </div>
                )}
                <Modal
                    size="5xl"
                    backdrop="blur"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    classNames={{
                        backdrop: "bg-background/10",
                    }}
                >
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <h1>{project.title}</h1>
                                <div className="text-xs bg-content3 w-fit px-2 py-2 rounded-full">
                                    {project.role}
                                </div>
                            </div>
                            <p className="text-xs font-normal">
                                {project.description}
                            </p>
                        </ModalHeader>
                        <ModalBody className="flex justify-center items-center">
                            {project.videoSrc ? (
                                <video
                                    src={project.videoSrc}
                                    className="w-full h-full rounded-xl"
                                    controls
                                    muted
                                ></video>
                            ) : (
                                <div>
                                    <div className="sm:hidden block">
                                        <Carousel
                                            items={project.carousel}
                                            baseWidth={386}
                                            autoplay={true}
                                            autoplayDelay={3000}
                                            pauseOnHover={true}
                                            loop={false}
                                            round={false}
                                        />
                                    </div>
                                    <div className="sm:block hidden">
                                        <Carousel
                                            items={project.carousel}
                                            baseWidth={700}
                                            autoplay={true}
                                            autoplayDelay={3000}
                                            pauseOnHover={true}
                                            loop={false}
                                            round={false}
                                        />
                                    </div>
                                </div>
                            )}
                        </ModalBody>
                        <ModalFooter className="flex flex-wrap justify-start gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-content2 rounded-full py-1 px-3 text-[0.6rem]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
            <div className="w-full">
                <h1 className="text-2xl my-3">{project.title}</h1>
                <div className="mb-2 font-semibold">{project.role}</div>
                <p className="w-full text-justify text-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-content2 rounded-full py-1 px-3 text-[0.6rem]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex gap-2">
                <Tooltip
                    content={
                        project.github ? "Acessar Código" : "Código Privado"
                    }
                >
                    <Link href={project?.github || "#"}>
                        <Button
                            size="sm"
                            disabled={!project.github}
                            className={cn(
                                "bg-content2",
                                project.github
                                    ? "opacity-100"
                                    : "opacity-80 cursor-no-drop"
                            )}
                        >
                            <GithubIcon />
                            Código
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip
                    content={
                        project.website ? "Acessar website" : "Indisponível"
                    }
                >
                    <Link href={project?.website || "#"}>
                        <Button
                            size="sm"
                            className={cn(
                                project.color,
                                project.website
                                    ? "opacity-100"
                                    : "opacity-80 cursor-no-drop"
                            )}
                            disabled={!project.website}
                        >
                            <ArrowUpRight className="size-4" />
                            Website
                        </Button>
                    </Link>
                </Tooltip>
            </div>
        </motion.div>
    );
}
