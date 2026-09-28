const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'green_compass',
  password: 'fkeE43ND9*ds$',
  port: 5432,
});

module.exports = pool;