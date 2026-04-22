const express = require('express');
const router = express.Router();

const guildaController = require('../controllers/guildaController.js');

router.get('/guildas/topPrestigio', guildaController.listaTopGuildaPrestigio);
router.get('/guildas/topMembros', guildaController.listaTopGuildaMembros);
router.get('/guildas', guildaController.listaGuilda)

module.exports = router;