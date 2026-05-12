const express = require('express');
const { AppDataSource } = require("./data-source");
const productRoutes = require('./infrastructure/routes/productRoutes');

const app = express();
app.use(express.json());

// Inicia a conexão com o Banco de Dados
AppDataSource.initialize()
    .then(() => {
        console.log("✅ BANCO DE DADOS CONECTADO (DOCKER)!");
        
        // Só libera as rotas se o banco conectar
        app.use('/api/v1/produtos', productRoutes);

        app.listen(3000, () => {
            console.log("🚀 Servidor Mãos à Arte rodando na porta 3000");
        });
    })
    .catch((error) => {
        console.log("❌ Erro ao conectar no banco:", error);
    });