const express = require('express');
const pool = require('./db/index');
const tenantsRoute = require('./routes/tenants')
const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/tenants', tenantsRoute);
app.use('/', productRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
