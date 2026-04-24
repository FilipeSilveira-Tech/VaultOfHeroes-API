import { Router } from 'express';
const router = Router();

// --- CONTROLLERS ---
import { itemById, itemsByType, listExpensiveItems, listItemsShop } from './items.controller.js';

// --- MIDDLEWARES ---
import { validarItemId, validarItemType } from '../../middlewares/items.middleware.js';

router.get('/items', listItemsShop);
router.get('/items/expensive', listExpensiveItems);
router.get('/items/type/:type', validarItemType , itemsByType); // weapon | armor | accessory | utility
router.get('/items/:id', validarItemId, itemById);

export default router;