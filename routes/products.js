const express = require('express');
const router = express.Router();
const pool = require('../db/index');

router.post('/:tenant/products' , async (req,res) => {
    const { tenant } = req.params;
    const { name, price, description } = req.body;

    try {
        const query = `
          INSERT INTO "${tenant}".products (name, price)
          VALUES ($1, $2) RETURNING *;
        `;
        const values = [name, price];
        const result = await pool.query(query, values);
    
        res.status(201).json(result.rows[0]);
      } catch (err) {
        console.error('Insert error:', err.message);
        res.status(500).json({ error: 'Insert failed' });
      }
})

// SELECT all from tenants.products
router.get('/:tenant/products', async (req, res) => {
    const { tenant } = req.params;
  
    try {
      const query = `SELECT * FROM "${tenant}".products;`;
      const result = await pool.query(query);
  
      res.json(result.rows);
    } catch (err) {
      console.error('Select error:', err.message);
      res.status(500).json({ error: 'Fetch failed' });
    }
  });

  module.exports = router;
  