import conectarBanco from '../database/conectarBanco.js';

// Top 5 em prestigio
export const listaTopGuildaPrestigio = async (req, res) => {
    const QUERY_PRESTIGIO = "SELECT * FROM Guildas ORDER BY prestige DESC LIMIT 5";
    const db = await conectarBanco();
    const guildasPrestigio = await db.all(QUERY_PRESTIGIO);
    res.json({
        message: "Top 5 guildas mais prestigiadas!",
        guildas: guildasPrestigio
    });
}

// Top 5 em membros
export const listaTopGuildaMembros = async (req, res) => {
    const QUERY_MEMBROS = "SELECT * FROM Guildas ORDER BY members DESC LIMIT 5";
    const db = await conectarBanco();
    const guildasMembros = await db.all(QUERY_MEMBROS);
    res.json({
        message: "Top 5 guildas com mais herois!",
        guildas: guildasMembros
    });
}

export const listaGuilda = async (req, res) => {
    const db = await conectarBanco();
    const listaGuildas = await db.all("SELECT * FROM Guildas");
    res.json({
        message: "Todas as guildas!",
        guildas: listaGuildas
    })
}