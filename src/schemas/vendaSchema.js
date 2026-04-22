const { z } = require('zod');

const vendaSchema = z.object({
    item_id: z.number({ required_error: "O item_id dever ser um número!" }).positive({ required_error: "O item_id deve ser positivo " }).int({ required_error: "O item_id deve ser um número inteiro" }),
    quantidade: z.number({ required_error: "A quantidade deve ser um número" }).int({ required_error: "A quantidade deve ser número inteiro" }).min(1).default(1),
    cupom: z.string().max(10).optional()
});
module.exports = { vendaSchema }