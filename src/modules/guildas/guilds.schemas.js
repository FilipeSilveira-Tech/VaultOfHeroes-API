import { z } from "zod";

export const searchGuildId = z.object({
    id: z.coerce.number({
        required_error: "O ID da guilda é obrigátorio ser número!"
    }).int({
        required_error: "O ID não pode número float!"
    }).positive({
        required_error: "O ID não pode ser negativo!"
    })
});