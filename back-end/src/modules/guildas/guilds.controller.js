import guildService from './guilds.service.js';

// Top 5 em prestigio
export const listTopPrestigeGuilds = async (req, res) => {
    const validResult = await guildService.topPrestigeGuilds();
    res.json({
        message: "Top 5 guildas mais prestigiadas!",
        ...validResult
    });
};

// Top 5 em membros
export const listTopMembersGuilds = async (req, res) => {
    const validResult = await guildService.topMembersGuilds();
    res.json({
        message: "Top 5 guildas com mais herois!",
        ...validResult
    });
};

export const listGuilds = async (req, res) => {
    const validResult = await guildService.listGuilds();
    res.json({
        message: "Todas as guildas!",
        ...validResult
    })
};

export const seachById = async (req, res) => {
    const validResult = await guildService.serachById(req.params.id);
    res.json({
        message: `Informações sobre guilda ID: ${req.params.id}`,
        ...validResult
    });
};