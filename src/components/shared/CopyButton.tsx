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

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(text);
        addToast({
            title: "Copiado",
            description: "Copiado para a área de transferência com sucesso",
            color: "success",
        });
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
