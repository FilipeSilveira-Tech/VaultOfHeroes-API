import conectarBanco from "../database/conectarBanco.js";

export const listaItem = async (req, res) => {
    const db = await conectarBanco();
    const listaItens = await db.all("SELECT * FROM Loja");
    res.json({
        message: "Lista de todos itens",
        loja_itens: listaItens
    })
}

// Top 10 itens caros
export const topItensCaros = async (req, res) => {
    const db = await conectarBanco();
    const topItens = await db.all("SELECT * FROM Loja ORDER BY base_price DESC LIMIT 10");
    res.json({
        message: "Top itens caros",
        lista_itens_caros: topItens
    })
}

// Por categoria
export const itensCategoria = async (req, res) => {
    const db = await conectarBanco();
    const reqType = req.params.type;
    const typeCap = reqType.charAt(0).toUpperCase() + reqType.slice(1).toLowerCase();

    const listaItensCategoria = await db.all("SELECT * FROM Loja WHERE type = ?", typeCap);
    res.json({
        message: `Lista de itens da categoria: ${typeCap}`,
        lista_itens_categoria: listaItensCategoria
    })
}

export const itemId = async (req, res) => {
    const db = await conectarBanco();
    const reqId = req.params.id;
    console.log(req.params)
    const item = await db.get("SELECT * FROM Loja WHERE id = ?", reqId);
    res.json({
        message: `Item ID "${reqId}" achado!`,
        detalhe_item: item
    })
}