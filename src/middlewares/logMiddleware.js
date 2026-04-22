module.exports = (req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] Método: ${req.method} |  Rota: ${req.url}`);
    next();
};