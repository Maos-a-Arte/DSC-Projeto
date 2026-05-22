const express = require('express');
require('reflect-metadata');
// Note: AppDataSource is not required in this testable package; keep the import
// to stay consistent with the project's structure but handle absence gracefully.
let AppDataSource;
try { AppDataSource = require('./data-source').AppDataSource; } catch (e) { AppDataSource = { initialize: async () => Promise.reject(e) }; }

const orderRoutes = require('./infrastructure/routes/orderRoutes');
const productRoutes = require('./infrastructure/routes/productRoutes');

const app = express();
app.use(express.json());

// Rotas
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("✅ BANCO DE DADOS CONECTADO!");
    })
    .catch((error) => {
        console.log("⚠️ Erro no banco (seguindo em modo de desenvolvimento):", error);
    })
    .finally(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    });

module.exports = app;
