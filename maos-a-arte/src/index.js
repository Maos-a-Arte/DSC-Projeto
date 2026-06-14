const express = require('express');
require('reflect-metadata');
const { AppDataSource } = require('./data-source'); 

const orderRoutes = require('./infrastructure/routes/OrderRoutes');
const productRoutes = require('./infrastructure/routes/ProductRoutes');

const app = express();
app.use(express.json());

// Rotas
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/products', productRoutes);

const PORT = 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("✅ BANCO DE DADOS CONECTADO!");
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("❌ Erro no banco:", error));