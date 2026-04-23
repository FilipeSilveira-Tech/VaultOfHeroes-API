import vendaService from "./compras.service.js";

export const comprarItem = async (req, res) => {
    const { heroi_id, item_id, quantidade } = req.body;
    const resul = await vendaService.realizarCompra(heroi_id, item_id, quantidade);

    res.status(201).json({
        message: "Venda realizada com sucesso!",
        ...resul
    })
}