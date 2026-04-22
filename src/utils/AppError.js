class AppError extends Error {
    constructor(message, status, detalhes = null) {
        super(message),
        this.status = status,
        this.detalhes = detalhes
    }
}
module.exports = AppError;