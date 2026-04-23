import { z } from 'zod';

export const vendaSchema = z.object({
    heroi_id: z.number({ required_error: "O heroi deve ser um número" }).positive().int(),
    item_id: z.number({ required_error: "O item_id dever ser um número!" }).positive().int(),
    quantidade: z.number({ required_error: "A quantidade deve ser um número" }).int().min(1).default(1),
    cupom: z.string().max(10).optional()
});