import { itemSearchId_Scheme, itemSearchType_Scheme } from '../modules/items/items.schemas.js';

export const validarItemId = (req, res, next) => {
    const validResult = itemSearchId_Scheme.safeParse(req.params);
    if (!validResult.success) {
        return res.status(400).json(validResult.error.format());
    }
    next();
}

export const validarItemType = (req, res, next) => {
    const validResult = itemSearchType_Scheme.safeParse(req.params);
    console.log("[LOG] Middleware: ", validResult)
    if (!validResult.success) {
        return res.status(400).json({
            error: "Formato de tipo inválido",
            details: validResult.error.format()
        });
    }
    req.params.type = validResult.data.type;
    next();
}