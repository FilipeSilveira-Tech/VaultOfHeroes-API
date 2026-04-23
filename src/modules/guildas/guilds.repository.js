import conectarBanco from "../../database/conectarBanco.js";
import AppError from "../../utils/AppError.js";
import heroesRepository from "../heroes/heroes.repository.js";

class guildRepository {
    // TOP 5: Maiores Prestigío
    async topPrestigeGuilds() {
        const db = await conectarBanco();
        const topGuilds = await db.all("SELECT * FROM Guildas ORDER BY prestige DESC LIMIT 5");
        return { topGuilds }
    };

    // TOP 5: Quantidade Membros
    async topMembersGuilds() {
        const db = await conectarBanco();
        const topGuilds = await db.all("SELECT * FROM Guildas ORDER BY members DESC LIMIT 5");
        return { topGuilds }
    };

    async listGuilds() {
        const db = await conectarBanco();
        const listGuilds = await db.all("SELECT * FROM Guildas");
        return { listGuilds }
    };

    async searchById(guild_id) {
        const db = await conectarBanco();
        const listGuilds = await db.get("SELECT * FROM Guildas WHERE id = ?", [guild_id]);
        return { listGuilds }
    };
}

export default new guildRepository();