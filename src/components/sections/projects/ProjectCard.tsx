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
    index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Animações para diferentes elementos do card
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 1.1,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="sm:max-w-[500px] max-w-[300px] w-full"
        >
            <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut",
                }}
                className="w-full sm:h-64 h-40 bg-content2 rounded-xl cursor-zoom-in relative overflow-hidden group"
            >
                <motion.div
                    onClick={onOpen}
                    className="inset-0 absolute h-full w-full group-hover:opacity-30 opacity-0 bg-gradient-to-r from-black from-10% via-transparent to-black to-90% transition-all duration-300"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
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
            </motion.div>
            <motion.div
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut",
                }}
                className="w-full"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.6,
                        ease: "easeOut",
                    }}
                    className="text-2xl my-3"
                >
                    {project.title}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.7,
                        ease: "easeOut",
                    }}
                    className="mb-2 font-semibold"
                >
                    {project.role}
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.8,
                        ease: "easeOut",
                    }}
                    className="w-full text-justify text-sm"
                >
                    {project.description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.9,
                        staggerChildren: 0.1,
                    }}
                    className="flex flex-wrap gap-2 my-3"
                >
                    {project.tags.map((tag, tagIndex) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.2 + 1.0 + tagIndex * 0.05,
                                ease: "backOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="bg-content2 rounded-full py-1 px-3 text-[0.6rem]"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 1.2,
                    ease: "easeOut",
                }}
                className="flex gap-2"
            >
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Tooltip
                        content={
                            project.github ? "Acessar Código" : "Código Privado"
                        }
                    >
                        <Link href={project?.github || ""} target="_blank">
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
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Tooltip
                        content={
                            project.website ? "Acessar website" : "Indisponível"
                        }
                    >
                        <Link href={project?.website || ""} target="_blank">
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
