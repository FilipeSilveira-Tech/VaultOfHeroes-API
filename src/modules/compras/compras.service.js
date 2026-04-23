import comprasRespositorie from './compras.repository.js';
import AppError from '../../utils/AppError.js';

class VendaService {
    async realizarCompra(heroi_id, item_id, quantidade) {
        const { heroi, item } = await comprasRespositorie.serachDataForSale(heroi_id, item_id);

        if (!heroi) throw new AppError("Heroi não encontrado", 404, {heroi_id: heroi_id});
        if (!item) throw new AppError("Item não encontrado", 404, {item_id: item_id});

        const valorTotal = item.base_price * quantidade;
        if (heroi.gold < valorTotal) {
            throw new AppError("Ouro Insuficiente!", 400, {ouro: heroi.gold, faltante: heroi.gold - valorTotal});
        };

        const transacao = await comprasRespositorie.executePurchase(
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

export default new VendaService();