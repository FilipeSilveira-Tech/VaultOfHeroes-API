require('dotenv').config();
const app = require('./app.js');
const env = require('./schemas/envSchema.js');

app.listen(env.PORT, () => {
    console.log(`[✅ ​ONLINE] Vault of Heroes API -> rodando em http://localhost:${env.PORT}`);
})