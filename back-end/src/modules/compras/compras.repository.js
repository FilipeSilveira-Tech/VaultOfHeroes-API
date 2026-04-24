import { pool } from '../../database/postgres.js';
import AppError from '../../utils/AppError.js';

class VendaRespository {
    async serachDataForSale(heroi_id, item_id) {
        try {
            const heroiReq = await pool.query("SELECT * FROM Herois WHERE id = $1", [heroi_id]);
            const itemReq = await pool.query("SELECT * FROM Loja WHERE id = $1", [item_id]);
            return { heroi: heroiReq.rows[0], item: itemReq.rows[0], item_quantidade: itemReq.rows[0]?.amount || 0, item_name: itemReq.rows[0]?.name }
        } catch (error) {
            throw new AppError("Erro ao buscar dados da venda, 500");
        }
    }

    async executePurchase(heroi_id, item_id, quantidade, newGold, guild_id) {
        const client = await pool.connect();

        try {
            await client.query("BEGIN");

            await client.query("UPDATE Herois SET gold = $1 WHERE id = $2", [newGold, heroi_id]);
            await client.query("UPDATE Loja SET amount = amount - $1 WHERE id = $2", [quantidade, item_id]);

            if (guild_id) {
                await client.query("UPDATE Guildas SET prestige = prestige + 1 WHERE id = $1", [guild_id]);
            }

            await client.query("COMMIT");
        } catch (error) {
            await client.query("ROLLBACK");
            throw new AppError("Erro na compra", 500);
        } finally {
            client.release()
        }
    };

    async saleLog(heroi_id, item_id, item_name, quantidade) {
        const now = new Date();
        const log = await pool.query(
            "INSERT INTO lojaVendas (heroi_id, item_id, item_name, amount, data_compra) VALUES ($1, $2, $3, $4, NOW())",
            [heroi_id, item_id, item_name, quantidade]
        );

        return log.rows[0].id;
    };

    async validateInventoryHero(heroi_id, item_id) {
        const inventoryValidate = await pool.query(
            "SELECT 1 FROM heroInventory WHERE heroi_id = $1 AND item_id = $2 LIMIT 1",
            [heroi_id, item_id]
        )

        return inventoryValidate.rows > 0;
    };

    async heroNewitem (heroi_id, item_id, item_name, quantidade) {        
        const insertNewItem = await pool.query(
            "INSERT INTO heroInventory (heroi_id, item_id, item_name, amount) VALUES ($1, $2, $3, $4)",
            [heroi_id, item_id, item_name, quantidade],
        );
    }

    async itemUpdate (heroi_id, item_id, quantidade) {        
        const updateItem = await pool.query(
            "UPDATE heroInventory SET amount = amount + $1 WHERE heroi_id = $2 AND item_id = $3",
            [quantidade, heroi_id, item_id]
        );
    }
}

export default new VendaRespository();