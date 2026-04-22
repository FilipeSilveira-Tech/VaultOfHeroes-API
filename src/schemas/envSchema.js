const { z } = require('zod');

const envSchema = z.object({
    SECRET_KEY: z.string(),
    DATABASE_URL: z.string().url(),
    PORT: z.string().default('3000')
})

const env = envSchema.safeParse(process.env);

module.exports = env.data;