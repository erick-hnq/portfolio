import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const senders = new Map<string, number>();
const MAX_SEND_PER_IP = 5;

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT ?? 2525),
    auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
    },
});

export async function POST(request: NextRequest) {
    const clientIp = getClientIp(request);

    if (!clientIp) {
        return new Response("Requisição mal formada, tente novamente.", {
            status: 403,
        });
    }

    const senderCount = senders.get(clientIp) || 0;
    if (senderCount > MAX_SEND_PER_IP) {
        return new Response("Você já enviou o máximo de mensagens permitido.", {
            status: 403,
        });
    }

    const body = (await request.json()) as {
        name: string;
        email: string;
        message: string;
    };

    try {
        await transporter.sendMail({
            from: '"Portfolio Site" <no-reply@erickdev.site>',
            to: "erickcontato012@gmail.com",
            subject: `Contato de ${body.name} via Portfolio`,
            replyTo: body.email,
            text: body.message,
            html: `<p>${body.message}</p>`,
        });

        senders.set(clientIp, senderCount + 1);
        return new Response(JSON.stringify({ message: "Success" }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response("Erro ao enviar a mensagem.", {
            status: 500,
        });
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
