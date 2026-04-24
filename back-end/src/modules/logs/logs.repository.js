import { pool } from '../../database/postgres.js';

class logsRepository {
    async searchAllLogs() {
        const logs = await pool.query("SELECT * FROM lojaVendas");
        return logs.rows;
    };
}

export default new logsRepository();