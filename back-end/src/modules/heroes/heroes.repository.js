import conectarBanco from "../../database/conectarBanco.js";
import AppError from "../../utils/AppError.js";

class heroesRepository {
    async listHeroes() {
        const db = await conectarBanco();
        const listHeroes = await db.all("SELECT * FROM Herois");

        return { listHeroes }
    };

    async searchById(heroi_id) {
        const db = await conectarBanco();
        const hero = await db.get("SELECT * FROM Herois WHERE id = ?", [heroi_id]);

        return { hero }
    };

    async topRichHeroes() {
        const db = await conectarBanco();
        const topHeroes = await db.all("SELECT * FROM Herois ORDER BY gold DESC LIMIT 10");

        return { topHeroes }
    };

    async heroInventory(heroi_id) {
        const db = await conectarBanco();
        const items = await db.all("SELECT inventory_id, item_id, item_name, amount FROM heroInventory WHERE heroi_id = ?", [heroi_id]);

        return { items }
    }
};

export default new heroesRepository();