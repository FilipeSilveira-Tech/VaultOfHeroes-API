import { pool } from '../../database/postgres.js';
import AppError from "../../utils/AppError.js";

class itemsRepository {
    async searchAllItems() {
        const items = await pool.query("SELECT * FROM loja");
        return items.rows;
    };

    async topExpensiveItems() {
        const topItems = await pool.query("SELECT * FROM loja ORDER BY base_price DESC LIMIT 10");
        return topItems.rows; 
    };

    async searchItemsType(item_type) {
        const listItemsType = await pool.query("SELECT * FROM loja WHERE type = $1", item_type);
        return listItemsType.rows;
    };

    async searchItemId(item_id) {
        const item = await pool.query("SELECT * FROM loja WHERE id = $1", item_id);
        return item.rows[0];
    };
}

export default new itemsRepository();