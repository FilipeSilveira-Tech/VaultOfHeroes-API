const vendaRespositorie = require('./compras.repository.js');
const AppError = require('../../utils/AppError.js');

class VendaService {
    async realizarCompra(heroi_id, item_id, quantidade) {
        const { heroi, item } = await vendaRespositorie.buscarDadosParaVenda(heroi_id, item_id);

        if (!heroi) throw new AppError("Heroi não encontrado", 404, {heroi_id: heroi_id});
        if (!item) throw new AppError("ITem não encontrado", 404, {item_id: item_id});

        const valorTotal = item.base_price * quantidade;
        if (heroi.gold < valorTotal) {
            throw new AppError("Ouro Insuficiente!", 400, {ouro: heroi.gold, faltante: heroi.gold - valorTotal});
        };

        const transacao = await vendaRespositorie.executarTransacaoComprar(
            heroi_id,
            item_id,
            quantidade,
            heroi.gold - valorTotal,
            heroi.guild_id
        );

        return {
            detalhe_heroi: {
                heroi_id: heroi_id,
                heroi_gold: heroi.gold,
                heroi_novoSaldo: heroi.gold - valorTotal,
            },
            detalhe_compra: {
                transacao_id: transacao,
                item_nome: item.name,
                item_type: item.type,
                item_price: item.base_price,
                quantidade: quantidade,
                valor_total: valorTotal
            }
        };
    }
}

module.exports = new VendaService();