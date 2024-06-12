
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
    const user = await client.demo.findFirst({});
    return Response.json({ email: user?.username,password: user?.password})
}