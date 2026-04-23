const express = require('express');
const router = express.Router();

// --- CONTROLLERS ---
const vendaController = require('./compras.controller.js');


// --- MIDDLEWARE ---
const { validarVenda } = require('../../middlewares/vendaMiddleware.js');

router.post('/comprar', validarVenda, vendaController.comprarItem); //

module.exports = router;