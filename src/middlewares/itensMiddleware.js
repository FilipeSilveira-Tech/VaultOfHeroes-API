import { itemSearchId_Scheme, itemSearchType_Scheme } from '../schemas/itemSchema.js';

export const validarItemId = (req, res, next) => {
    const resul = itemSearchId_Scheme.safeParse(req.params);
    if (!resul.success) {
        return res.status(400).json(resul.error.format());
    }
    next();
}

export const validarItemType = (req, res, next) => {
    const resul = itemSearchType_Scheme.safeParse(req.params);
    if (!resul.success) {
        return res.status(400).json(resul.error.format());
    }
    next();
}