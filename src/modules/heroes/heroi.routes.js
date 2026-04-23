const express = require('express');
const router = express.Router();

const heroiController = require('./heroiController.js');

//const {} = require('../middlewares/heroiMiddleware.js');

router.get('/herois', heroiController.listaHerois);
router.get('/herois/top', heroiController.topHerois);
router.get('/herois/:id', heroiController.buscarHeroiId);

module.exports = router;