const express = require('express');
const router = express.Router();
const {createTenantSchema} = require('../db/initdb')


require('dotenv').config();

router.post('/create' , async (req,res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Tenant name is required' });

    try {
        await createTenantSchema(name.toLowerCase());
        res.status(201).json({ message: `Schema "${name}" created.` });
      } catch (err) {
        res.status(500).json({ error: 'Internal error' });
      }
})

module.exports = router;