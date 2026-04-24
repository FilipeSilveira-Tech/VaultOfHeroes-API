import conectarBanco from '../../database/conectarBanco.js';
import AppError from '../../utils/AppError.js';

class VendaRespository {
    async serachDataForSale(heroi_id, item_id) {
        const db = await conectarBanco();

        const heroiReq = await db.get("SELECT * FROM Herois WHERE id = ?", [heroi_id]);
        const itemReq = await db.get("SELECT * FROM Loja WHERE id = ?", [item_id]);
        return { heroi: heroiReq, item: itemReq, item_quantidade: itemReq.amount || 0}
    }

    async executePurchase(heroi_id, item_id, quantidade, newGold, guild_id) {
        const db = await conectarBanco();
        await db.run("UPDATE Herois SET gold = ? WHERE id = ?", [newGold, heroi_id]);
        await db.run("UPDATE Loja SET amount = amount - 1 WHERE id = ?", [item_id]);

        const vendaReq = await db.run(
            "INSERT INTO lojaVendas (heroi_id, item_id, amount, data_compra) VALUES (?, ?, ?, ?)",
            [heroi_id, item_id, quantidade, new Date().toISOString()]
        );

        if (guild_id) {
            await db.run("UPDATE Guildas SET prestige = prestige + 1 WHERE id = ?", [guild_id]);
        }

        console.log("[LOG] executarTransacaoComprar", {
            heroi_id,
            item_id,
            quantidade,
            newGold,
            guild_id,
            data: new Date().toISOString()
        })
    };

    async saleLog(heroi_id, item_id, quantidade) {
        const db = await conectarBanco();
        const now = new Date();
        const log = await db.run(
            "INSERT INTO lojaVendas (heroi_id, item_id, amount, data_compra) VALUES (?, ?, ?, ?)",
            [heroi_id, item_id, quantidade, now.toISOString()]
        );

        return log.lastID;
        console.log("[LOG] ID Compra: ", log.lastID);
    };

    async validateInventoryHero(heroi_id, item_id) {
        const db = await conectarBanco();

        const inventoryValidate = await db.get(
            "SELECT 1 FROM heroInventory WHERE heroi_id = ? AND item_id = ? LIMIT 1",
            [heroi_id, item_id]
        )

        return inventoryValidate;
    };

    async heroNewitem (heroi_id, item_id, quantidade) {
        const db = await conectarBanco();
        const insertNewItem = await db.run(
            "INSERT INTO heroInventory (heroi_id, item_id, amount) VALUES (?, ?, ?)",
            [heroi_id, item_id, quantidade],
        );
    }

    async itemUpdate (heroi_id, item_id, quantidade) {
        const db = await conectarBanco();

        const updateItem = await db.run(
            "UPDATE heroInventory SET amount = amount + ? WHERE heroi_id = ? AND item_id = ?",
            [quantidade, heroi_id, item_id]
        );
    }
}

export default new VendaRespository();