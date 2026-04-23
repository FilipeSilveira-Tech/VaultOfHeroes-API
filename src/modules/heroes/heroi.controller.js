import conectarBanco from '../database/conectarBanco.js';

export const listaHerois = async (req, res) => {
    const db = await conectarBanco();
    const QUERY_LISTA_HEROIS = "SELECT * FROM Herois";

    const listaHerois = await db.all(QUERY_LISTA_HEROIS);

    res.json({
        status: "Lista de Herois",
        lista_herois: listaHerois
    });
};

export const buscarHeroiId = async (req, res) => {
    const heroiReqId = req.params.id;

    const db = await conectarBanco();
    const QUERY_BUSCAR_HEROI = "SELECT * FROM Herois WHERE id = ?";
    const QUERY_BUSCAR_ITENS_HEROI = "SELECT * FROM heroiItens WHERE heroi_id = ?";
    const QUERY_BUSCAR_COMPRAS_HEROIS = "SELECT * FROM lojaVendas WHERE heroi_id = ?";

    const heroi = await db.get(QUERY_BUSCAR_HEROI, [heroiReqId]);
    const itens = await db.all(QUERY_BUSCAR_ITENS_HEROI, [heroiReqId]);
    const historicoCompras = await db.all(QUERY_BUSCAR_COMPRAS_HEROIS, [heroiReqId]);

    res.json({
        message: "Heroi Achado!",
        detalhes_heroi: {
            heroi_id: heroi.id,
            heroi_name: heroi.name,
            heroi_guild_id: heroi.guild_id,
            heroi_gold: heroi.gold,
            heroi_class: heroi.class,
            heroi_itens: itens,
            heroi_historico_compras: historicoCompras
        },
    })

}

// Top 10 herois + gold
export const topHerois = async (req, res) => {
    const QUERY_TOP_HEROIS = "SELECT * FROM Herois ORDER BY gold DESC LIMIT 10";
    const db = await conectarBanco();
    const topHerois = await db.all(QUERY_TOP_HEROIS);
    res.json(topHerois);
}
