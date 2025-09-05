"use client";

import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { Tooltip } from "@heroui/tooltip";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyButtonProps {
    text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            // Tenta usar a Clipboard API moderna primeiro
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                setIsCopied(true);
                addToast({
                    title: "Copiado",
                    description:
                        "Copiado para a área de transferência com sucesso",
                    color: "success",
                });
                return;
            }

            // Fallback para método tradicional (compatível com mobile)
            const textArea = document.createElement("textarea");
            textArea.value = text;

            // Estilização para tornar o elemento invisível
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            textArea.style.opacity = "0";
            textArea.setAttribute("readonly", "");
            textArea.setAttribute("aria-hidden", "true");

            document.body.appendChild(textArea);

            // Para iOS Safari
            if (navigator.userAgent.match(/ipad|iphone/i)) {
                textArea.contentEditable = "true";
                textArea.readOnly = false;
                const range = document.createRange();
                range.selectNodeContents(textArea);
                const selection = window.getSelection();
                selection?.removeAllRanges();
                selection?.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                textArea.select();
            }

            const successful = document.execCommand("copy");
            document.body.removeChild(textArea);

            if (successful) {
                setIsCopied(true);
                addToast({
                    title: "Copiado",
                    description:
                        "Copiado para a área de transferência com sucesso",
                    color: "success",
                });
            } else {
                throw new Error("Comando de cópia falhou");
            }
        } catch (error) {
            console.error("Erro ao copiar texto:", error);
            addToast({
                title: "Erro",
                description:
                    "Não foi possível copiar para a área de transferência",
                color: "danger",
            });
        }
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isCopied) {
            timeout = setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [isCopied]);

    return (
        <Tooltip content={isCopied ? "Copiado" : "Copiar"}>
            <Button
                size="md"
                variant="shadow"
                color="default"
                type="button"
                isIconOnly
                onPress={handleCopy}
            >
                {isCopied ? (
                    <CheckIcon className="size-4" />
                ) : (
                    <CopyIcon className="size-4" />
                )}
                <span className="sr-only">Copiar</span>
            </Button>
        </Tooltip>
    );
}
