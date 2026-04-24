import comprasService from "./compras.service.js";

export const buyItem = async (req, res) => {
    const { heroi_id, item_id, quantidade } = req.body;
    const result = await comprasService.realizarCompra(heroi_id, item_id, quantidade);

    res.status(201).json({
        message: "Venda realizada com sucesso!",
        ...result
    })
}