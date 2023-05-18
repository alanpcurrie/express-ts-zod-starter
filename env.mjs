import { z } from "zod";
import { logger } from "~utils/logger";

const serverSchema = z.object({
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

const validateServerEnv = (env) => {
    const parsed = serverSchema.safeParse(env);

    if (!parsed.success) {
        const fieldErrors = parsed.error.flatten().fieldErrors;
        logger.log({
            message: `❌ Invalid server-side environment variables:", ${fieldErrors}`,
            level: 'error'
        });
        throw new Error("❌  Invalid server-side environment variables");
    }
    return parsed.data;
};

const validateEnv = process.env.SKIP_ENV_VALIDATION ? (env) => env : validateServerEnv;

const env = validateEnv(processEnv);

export { env };
