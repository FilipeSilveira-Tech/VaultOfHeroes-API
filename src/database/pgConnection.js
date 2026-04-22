const { Pool } = require('pg');
const env = require('../schemas/envSchema');

module.exports = new Pool({
    connectionString: env.DATABASE_URL
});