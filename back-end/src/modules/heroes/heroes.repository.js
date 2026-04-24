import { pool } from '../../database/postgres.js';
import AppError from "../../utils/AppError.js";

class heroesRepository {
    async listHeroes() {
        const listHeroes = await pool.query("SELECT * FROM Herois");

        return listHeroes.rows;
    };

    async searchById(heroi_id) {
        const hero = await pool.query("SELECT * FROM Herois WHERE id = $1", [heroi_id]);

        return hero.rows[0];
    };

    async topRichHeroes() {
        const topHeroes = await pool.query("SELECT * FROM Herois ORDER BY gold DESC LIMIT 10");

        return topHeroes.rows;
    };

    async heroInventory(heroi_id) {
        const items = await pool.query("SELECT inventory_id, item_id, item_name, item_type, amount FROM heroInventory WHERE heroi_id = $1", [heroi_id]);

        return items.rows;
    }
};

export default new heroesRepository();