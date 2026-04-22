import { z } from "zod";

export const itemSearchId_Scheme = z.object({
    id: z.coerce
    .number({
        required_error: "O ID do item deve ser um número!"
    })
    .int({
        required_error: "O ID deve ser um número inteiro!"
    })
    .positive({
        required_error: "O ID deve ser um número positivo!"
    })
});

export const itemSearchType_Scheme = z.object({
    type: z.coerce.string()
});