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
        const heroi = await db.get("SELECT * FROM Herois WHERE id = ?", [heroi_id]);

        return { heroi }
    };

    async topRichHeroes() {
        const db = await conectarBanco();
        const topHeroes = await db.all("SELECT * FROM Herois ORDER BY gold DESC LIMIT 10");

        return { topHeroes }
    };
};

export default new heroesRepository();