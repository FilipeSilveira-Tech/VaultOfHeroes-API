import { searchGuildId } from '../modules/guildas/guilds.schemas.js';

export const validateGuildId = (req, res, next) => {
    const validResult = searchGuildId.safeParse(req.params);
    if (!validResult.success) {
        return res.status(400).json(validResult.error.format());
    }
    next();
}