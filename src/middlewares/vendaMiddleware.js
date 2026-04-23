import { vendaSchema } from '../modules/compras/compras.schemas.js';

export const validarVenda = (req, res, next) => {
    const resul = vendaSchema.safeParse(req.body);
    if (!resul.success) {
        return res.status(400).json(resul.error.format());
    }
    next();
}