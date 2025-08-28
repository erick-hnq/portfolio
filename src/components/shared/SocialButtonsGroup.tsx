import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { DownloadIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export function SocialButtonsGroup() {
    return (
        <div className="flex items-center self-start gap-2">
            <Link href="https://github.com/Erick244" target="_blank">
                <Tooltip content="Acessar Github">
                    <Button
                        variant="bordered"
                        isIconOnly
                        className="bg-content2"
                    >
                        <GithubIcon className="size-4" />
                        <span className="sr-only">Github</span>
                    </Button>
                </Tooltip>
            </Link>
            <Link href="mailto:erickcontato01@gmail.com" target="_blank">
                <Tooltip content="Enviar E-mail">
                    <Button
                        variant="bordered"
                        isIconOnly
                        className="bg-content2"
                    >
                        <MailIcon className="size-4" />
                        <span className="sr-only">E-mail</span>
                    </Button>
                </Tooltip>
            </Link>
            <Link href="https://wa.me/5512997896834" target="_blank">
                <Tooltip content="Enviar WhatsApp">
                    <Button
                        variant="bordered"
                        isIconOnly
                        className="bg-content2"
                    >
                        <WhatsAppIcon className="size-4" />
                        <span className="sr-only">WhatsApp</span>
                    </Button>
                </Tooltip>
            </Link>
            <Link href="/cv.pdf" download="ERICK-HENRIQUE-CV.pdf">
                <Tooltip content="Download Curriculum">
                    <Button
                        variant="bordered"
                        isIconOnly
                        className="bg-content2"
                    >
                        <DownloadIcon className="size-4" />
                        <span className="sr-only">Curriculum</span>
                    </Button>
                </Tooltip>
            </Link>
        </div>
    );
}
