import comprasRespositorie from './compras.repository.js';
import AppError from '../../utils/AppError.js';

class VendaService {
    async realizarCompra(heroi_id, item_id, quantidade) {
        const { heroi, item, item_quantidade, item_name } = await comprasRespositorie.serachDataForSale(heroi_id, item_id);

        if (!heroi) throw new AppError("Heroi não encontrado", 404, {heroi_id: heroi_id});
        if (!item) throw new AppError("Item não encontrado", 404, {item_id: item_id});

        if (item_quantidade == 0) throw new AppError("Item com quantidade zero!", {detalhes: `Quantidade na loja do item: ${item_quantidade}`})

        const valorTotal = item.base_price * quantidade;
        if (heroi.gold < valorTotal) {
            throw new AppError("Ouro Insuficiente!", 400, {ouro: heroi.gold, faltante: heroi.gold - valorTotal});
        };

        const venda = await comprasRespositorie.executePurchase(
            heroi_id,
            item_id,
            quantidade,
            heroi.gold - valorTotal,
            heroi.guild_id
        );

        const log = await comprasRespositorie.saleLog(
            heroi_id,
            item_id,
            item_name,
            quantidade
        )

        const heroHasItem = await comprasRespositorie.validateInventoryHero(heroi_id, item_id);

        if (heroHasItem) {
            await comprasRespositorie.itemUpdate(heroi_id, item_id, item_name, quantidade);
        } else {
            await comprasRespositorie.heroNewitem(heroi_id, item_id, quantidade);
        }

        return {
            detalhe_heroi: {
                heroi_id: heroi_id,
                heroi_gold: heroi.gold,
                heroi_novoSaldo: heroi.gold - valorTotal,
            },
            detalhe_compra: {
                transacao_id: log,
                item_nome: item_name,
                item_type: item.type,
                item_price: item.base_price,
                quantidade: quantidade,
                valor_total: valorTotal
            }
        };
    }
}

export default new VendaService();