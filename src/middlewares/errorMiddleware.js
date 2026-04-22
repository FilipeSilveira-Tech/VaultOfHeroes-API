module.exports = (err, req, res, next) => {
    console.log("‼️ ERRO DETECTADO: ", err.message);

    if (err.name === 'ZodError') {
        return res.status(400).json({
            status: "Erro de Validação",
            detalhes: err.format()
        });
    }

    const statusCode = err.status || 500;
    const mensagem = err.message || "[ALGO ERRADO] O velho mago vai verificar....";

    return res.status(statusCode).json({
        status: statusCode === 500 ? "Erro interno": "Erro de Negócio",
        mensagem: mensagem,
        detalhes: err.detalhes || null
    });

    next();
}