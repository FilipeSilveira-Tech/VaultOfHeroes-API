import { pool } from '../../database/postgres.js';
import AppError from "../../utils/AppError.js";

class guildRepository {
    // TOP 5: Maiores Prestigío
    async topPrestigeGuilds() {
        const topGuilds = await pool.query("SELECT * FROM guildas ORDER BY prestige DESC LIMIT 5");
        return topGuilds.rows
    };

    // TOP 5: Quantidade Membros
    async topMembersGuilds() {
        const topGuilds = await pool.query("SELECT * FROM guildas ORDER BY members DESC LIMIT 5");
        return topGuilds.rows
    };

    async listGuilds() {
        const listGuilds = await pool.query("SELECT * FROM guildas");
        return listGuilds.rows
    };

    async searchById(guild_id) {
        const listGuilds = await pool.query("SELECT * FROM guildas WHERE id = $1", [guild_id]);
        return listGuilds.rows[0]
    };
}

export default new guildRepository();