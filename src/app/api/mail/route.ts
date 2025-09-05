import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import z from "zod";

const senders = new Map<string, { count: number; lastReset: number }>();
const MAX_SEND_PER_IP = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora

const contactSchema = z.object({
    name: z.string().min(1).max(100).trim(),
    email: z.email().max(255),
    message: z.string().min(1).max(2000).trim(),
});

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT ?? 2525),
    auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
    },
});

export async function POST(request: NextRequest) {
    const headers = {
        "Content-Type": "application/json",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
    };

    const clientIp = getClientIp(request);
    if (!clientIp) {
        return new Response("Requisição mal formada, tente novamente.", {
            status: 403,
            headers,
        });
    }

    const senderData = senders.get(clientIp);
    const now = Date.now();

    if (senderData) {
        if (now - senderData.lastReset > RATE_LIMIT_WINDOW) {
            senders.set(clientIp, { count: 0, lastReset: now });
        } else if (senderData.count >= MAX_SEND_PER_IP) {
            return new Response(
                JSON.stringify({
                    error: "Limite de envios excedido. Tente novamente em 1 hora.",
                }),
                { status: 429, headers }
            );
        }
    } else {
        senders.set(clientIp, { count: 0, lastReset: now });
    }

    try {
        const body = await request.json();
        const validatedData = contactSchema.parse(body);

        const sanitizedData = {
            name: validatedData.name.replace(/[<>]/g, ""),
            email: validatedData.email.toLowerCase(),
            message: validatedData.message.replace(/[<>]/g, ""),
        };

        await transporter.sendMail({
            from: '"Portfolio Site" <no-reply@erickdev.site>',
            to: "erickcontato012@gmail.com",
            subject: `Contato de ${sanitizedData.name} via Portfolio`,
            replyTo: sanitizedData.email,
            text: sanitizedData.message,
            html: `<p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>`,
        });

        const currentSender = senders.get(clientIp)!;
        senders.set(clientIp, {
            ...currentSender,
            count: currentSender.count + 1,
        });

        return new Response(
            JSON.stringify({ message: "Mensagem enviada com sucesso!" }),
            { status: 200, headers }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(
                JSON.stringify({
                    error: "Dados inválidos",
                    details: error.message,
                }),
                { status: 400, headers }
            );
        }

        // Log seguro (sem expor detalhes)
        if (process.env.NODE_ENV === "development") {
            console.error("Mail error:", error);
        }

        return new Response(
            JSON.stringify({ error: "Erro interno do servidor" }),
            { status: 500, headers }
        );
    }
}

function getClientIp(request: NextRequest) {
    const headers = request.headers;
    const headerIP =
        headers.get("x-forwarded-for") ||
        headers.get("x-real-ip") ||
        headers.get("cf-connecting-ip");
    if (headerIP) return headerIP.split(",")[0].trim();
}
