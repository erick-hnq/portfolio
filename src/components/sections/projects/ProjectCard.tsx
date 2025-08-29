"use client";

import GithubIcon from "@/components/icons/GithubIcon";
import { Button } from "@heroui/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@heroui/modal";
import { Tooltip } from "@heroui/tooltip";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <div>
            <div className="w-96 h-52 bg-content2 rounded-xl cursor-zoom-in">
                <div onClick={onOpen} className="h-full w-full" />
                <Modal
                    size="2xl"
                    backdrop="blur"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    classNames={{
                        backdrop: "bg-background/10",
                    }}
                    className="cursor-zoom-out"
                    onClick={onClose}
                >
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1">
                            <h1>Projeto 1</h1>
                            <p className="text-xs font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor quibusdam commodi
                                doloremque repellendus amet vero tempore
                                aspernatur sapiente, nisi reprehenderit dolore
                                eum? Natus officia non quasi recusandae
                                repellendus sed modi.
                            </p>
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor
                                eiusmod. Et mollit incididunt nisi consectetur
                                esse laborum eiusmod pariatur proident Lorem
                                eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
            <div>
                <h1 className="text-2xl my-3">Projeto 1</h1>
                <div className="mb-2 font-semibold">
                    Desenvolvedor Fullstack
                </div>
                <p className="max-w-96 text-justify text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nobis architecto pariatur placeat voluptate esse nemo
                    corrupti in a, veritatis, at sit et dolor consequuntur.
                    Ducimus distinctio omnis vero quaerat.
                </p>
                <div className="flex flex-wrap gap-2 text-xs my-3">
                    <span className="bg-content2 rounded-full py-2 px-3">
                        NextJS
                    </span>
                    <span className="bg-content2 rounded-full py-2 px-3">
                        CSS
                    </span>
                    <span className="bg-content2 rounded-full py-2 px-3">
                        HTML
                    </span>
                </div>
            </div>
            <div className="flex gap-2">
                <Tooltip content="Ver no GitHub">
                    <Button size="sm" className="bg-content2">
                        <GithubIcon />
                        Código
                    </Button>
                </Tooltip>
                <Tooltip content="Acessar website">
                    <Button size="sm" color="secondary">
                        <ArrowUpRight className="size-4" />
                        Website
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}
