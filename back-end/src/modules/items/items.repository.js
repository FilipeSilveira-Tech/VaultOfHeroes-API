import conectarBanco from "../../database/conectarBanco.js";
import AppError from "../../utils/AppError.js";

class itemsRepository {
    async searchAllItems() {
        const db = await conectarBanco();
        const items = await db.all("SELECT * FROM Loja");
        return { items };
    };

    async topExpensiveItems() {
        const db = await conectarBanco();
        const topItems = await db.all("SELECT * FROM Loja ORDER BY base_price DESC LIMIT 10");
        return { topItems }
    };

    async searchItemsType(item_type) {
        const db = await conectarBanco();
        const listItemsType = await db.all("SELECT * FROM Loja WHERE type = ?", item_type);
        return { listItemsType }
    };

    async searchItemId(item_id) {
        const db = await conectarBanco();
        const item = await db.get("SELECT * FROM Loja WHERE id = ?", item_id);
        return { item }
    };
}

export default new itemsRepository();