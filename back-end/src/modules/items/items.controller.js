import { itemSearchId_Scheme, itemSearchType_Scheme } from './items.schemas.js';
import itemsService from './items.service.js';

export const listItemsShop = async (req, res) => {
    const validResult = await itemsService.listItems();

    res.status(201).json({
        ...validResult
    });
};

export const listExpensiveItems = async (req, res) => {
    const validResult = await itemsService.topExpensiveItems();

    res.status(201).json({
        message: "Lista do top 10 itens mais caro do Velho Mago! 🧙‍♂️",
        ...validResult
    });
};

export const itemsByType = async (req, res) => {
    console.log("[LOG] Controller: ", req.params.type);
    const validResult = await itemsService.itemsByType(req.params.type);

    res.status(201).json({
        message: `Lista de todos itens do tipo: ${req.params.type}`,
        ...validResult
    });
};

export const itemById = async (req, res) => {
    const validResult = await itemsService.itemById(req.params.id);

    res.status(201).json({
        message: "Item Encontrado na loja!",
        ...validResult
    });
};