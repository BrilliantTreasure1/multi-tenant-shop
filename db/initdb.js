const pool = require('./index');
require('dotenv').config();

async function createTenantSchema(schemaName){
    const client = await pool.connect();

    try {
        await client.query(`CREATE SCHEMA IF NOT EXISTS ${schemaName}`);
        await client.query(`
          CREATE TABLE IF NOT EXISTS ${schemaName}.products (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            price INTEGER NOT NULL
          )
        `);
    
        console.log(`✅ Schema "${schemaName}" created with products table`);
      } catch (err) {
        console.error('⛔ Error creating schema:', err.message);
      } finally {
        await client.end();
      }
}

module.exports = { createTenantSchema };