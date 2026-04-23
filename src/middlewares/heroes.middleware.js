import { serachHeroId } from '../modules/heroes/heroes.schema.js';

export const validateHeroId = (req, res, next) => {
    const validResult = serachId.safeParse(req.params);
    if (!validResult.success) {
        return res.status(400).json(validResult.error.format());
    }
    next();
}