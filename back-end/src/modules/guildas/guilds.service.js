import guildsRepository from "./guilds.repository.js";
import AppError from "../../utils/AppError.js";

class guildsService {
    async topPrestigeGuilds() {
        const topGuilds = await guildsRepository.topPrestigeGuilds();

        if (!topGuilds) throw new AppError("Não foi encontrado top guildas no banco de dados!", 404, {detalhes: "Banco de dados vázio!"});

        return { topGuilds }
    };

    async topMembersGuilds() {
        const topGuilds = await guildsRepository.topMembersGuilds();

        if (!topGuilds) throw new AppError("Não foi encontrado top guildas no banco de dados!", 404, {detalhes: "Banco de dados vázio!"});

        return { topGuilds }
    };

    async listGuilds() {
        const listGuilds = await guildsRepository.listGuilds();

        if (!listGuilds) throw new AppError("Não foi encontrado guildas no banco de dados", 404, {detalhes: "Banco de dados vázios!"});

        return { listGuilds }
    };

    async serachById(guild_id) {
        const listGuilds = await guildsRepository.searchById(guild_id);

        if (!this.listGuilds) throw new AppError("Não foi encontrado a guilda!", 404, {detalhes: { guild_id: guild_id }});

        return { listGuilds }
    };
}

export default new guildsService();