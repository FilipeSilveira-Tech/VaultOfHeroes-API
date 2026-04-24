import itemsRepository from "./items.repository.js";
import AppError from "../../utils/AppError.js";

class itemService {
    async listItems() {
        const items = await itemsRepository.searchAllItems();

        if (!items) throw new AppError("Não foi encontrado itens no banco de dados!", 404, {detalhes: "Banco de dados vázio!"});
        
        return { items}
    };

    async topExpensiveItems() {
        const topItems = await itemsRepository.topExpensiveItems();

        if (!topItems) throw new AppError("Não foi encontrado um top itens mais caros!", 404, {detalhes: "Banco de dados vázio!"});

        return { list_expensive_items: topItems }
    };

    async itemsByType(item_type) {
        // const itemTypeCap = item_type.charAt(0).toUpperCase() + item_type.slice(1).toLowerCase();  -> OBSOLET
        console.log("[LOG] Service: ", item_type)
        const listItemsType = await itemsRepository.searchItemsType(item_type);

        if (!listItemsType) throw new AppError("Não foi encontrado itens com o tipo!", 404, {item_type: item_type});

        return { list_type_items: listItemsType }
    };

    async itemById(item_id) {
        const item = await itemsRepository.searchItemId(item_id);

        if (!item) throw new AppError("Não foi encontrado o item!", 404, {item_id: item_id});

        return { item: item }
    };
}

export default new itemService();