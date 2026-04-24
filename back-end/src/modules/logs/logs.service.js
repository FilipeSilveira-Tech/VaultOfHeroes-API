import logsRepository from "./logs.repository.js"
import AppError from "../../utils/AppError.js";

class logsService {
    async listAllLogs() {
        const logs = await logsRepository.searchAllLogs();
        if (!logs) throw new AppError("Não foi encontrado logs!", 404, {detalhes: "Banco de dados vázio!"});
        return {logs}
    };
}

export default new logsService();