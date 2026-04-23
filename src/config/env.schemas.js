import { z } from 'zod';

const envSchema = z.object({
    SECRET_KEY: z.string(),
    DATABASE_URL: z.string().url(),
    PORT: z.string().default('3000')
})

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error('Invalid enviroment variables:', _env.error.format());
    throw new Error('Invalid enviroment variables');
}

export const env = _env.data;