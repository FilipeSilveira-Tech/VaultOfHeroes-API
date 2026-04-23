import { z } from 'zod';

export const serachHeroId = z.object({
    id: z.coerce
    .number({
        required_error: "O ID do herói é obrigatório!"
    })
    .int({
        required_error: "O ID não pode ser um número float, mas um inteiro!"
    })
    .positive({
        required_error: "O ID não pode ser negátivo!"
    })
});