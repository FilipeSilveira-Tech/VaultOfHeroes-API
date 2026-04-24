import conectarBanco from "../../database/conectarBanco.js";

class logsRepository {
    async searchAllLogs() {
        const db = await conectarBanco();
        const logs = await db.all("SELECT * FROM lojaVendas");
        return { logs }
    };
}

export default new logsRepository();