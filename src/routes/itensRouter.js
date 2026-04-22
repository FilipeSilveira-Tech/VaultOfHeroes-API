const express = require('express');
const router = express.Router();

const itensController = require('../controllers/itensController.js');
const itensMiddleware = require('../middlewares/itensMiddleware.js');

router.get('/itens', itensController.listaItem);
router.get('/itens/caros', itensController.topItensCaros);
router.get('/itens/type/:type', itensMiddleware.validarItemType , itensController.itensCategoria); // weapon | armor | accessory | utility
router.get('/itens/:id', itensMiddleware.validarItemId, itensController.itemId);

module.exports = router;