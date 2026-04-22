const express = require('express');

const app = express();
app.use(express.json());

// ----- MIDDLEWARES -----
const errorMiddleware = require('./middlewares/errorMiddleware.js');
const logMiddleware = require('./middlewares/logMiddleware.js');
app.use(logMiddleware);

// ----- ROUTES -----
const heroiRouter = require('./routes/heroiRouter.js');
const guildaRouter = require('./routes/guildaRouter.js');
const itensRouter = require('./routes/itensRouter.js');

app.get('/teste', (req, res) => { res.send('TUDO FUNCIONANDO ✅​') })
app.use(heroiRouter);
app.use(guildaRouter);
app.use(itensRouter);

module.exports = app;