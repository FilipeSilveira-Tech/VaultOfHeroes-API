import { compraSchema } from '../modules/compras/compras.schemas.js';

export const validarCompra = (req, res, next) => {
    const resul = compraSchema.safeParse(req.body);
    if (!resul.success) {
        return res.status(400).json(resul.error.format());
    }
    next();
}