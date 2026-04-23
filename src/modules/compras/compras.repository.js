import conectarBanco from '../../database/conectarBanco.js';
import AppError from '../../utils/AppError.js';

class VendaRespository {
    async serachDataForSale(heroi_id, item_id) {
        const db = await conectarBanco();

        const heroiReq = await db.get("SELECT * FROM Herois WHERE id = ?", [heroi_id]);
        const itemReq = await db.get("SELECT * FROM Loja WHERE id = ?", [item_id]);
        return { heroi: heroiReq, item: itemReq}
    }

    async executePurchase(heroi_id, item_id, quantidade, newGold, guild_id) {
        const db = await conectarBanco();
        await db.run("UPDATE Herois SET gold = ? WHERE id = ?", [newGold, heroi_id]);

        console.log("[LOG] executarTransacaoComprar", {
            heroi_id,
            item_id,
            quantidade,
            newGold,
            guild_id,
            data: new Date().toISOString()
        })
        const vendaReq = await db.run(
            "INSERT INTO lojaVendas (heroi_id, item_id, amount, data_compra) VALUES (?, ?, ?, ?)",
            [heroi_id, item_id, quantidade, new Date().toISOString()]
        );

        if (guild_id) {
            await db.run("UPDATE Guildas SET prestige = prestige + 1 WHERE id = ?", [guild_id]);
        }

        return vendaReq.lastID;
        console.log(vendaReq.lastID);
    }
}

export default new VendaRespository();