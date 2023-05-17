import { z } from "zod";

const server = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    DB_HOST: z.string().min(1),
    DB_USERNAME: z.string().min(1),
    DB_PASSWORD: z.string().min(1),
    DB_URL: z.string().min(1),
});

const processEnv = {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_URL: process.env.DB_URL,
};

let env = process.env;

if (!!process.env.SKIP_ENV_VALIDATION == false) {
    const parsed = server.safeParse(processEnv);

    if (parsed.success === false) {
        console.error(
            "❌ Invalid server-side environment variables:",
            parsed.error.flatten().fieldErrors
        );
        throw new Error("Invalid server-side environment variables");
    }

    env = new Proxy(parsed.data, {
        get(target, prop) {
            if (typeof prop !== "string") return undefined;
            throw new Error(
                process.env.NODE_ENV === "production"
                    ? "❌ Attempted to access a server-side environment variable on the client"
                    : `❌ Attempted to access server-side environment variable '${prop}' on the client`
            );
        },
    });
}

export { env };
