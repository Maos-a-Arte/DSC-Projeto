const { DataSource } = require("typeorm"); // Adicione esta linha!
const Order = require('./domain/entities/Order'); // Verifique se o caminho está certo

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "password123",
    database: "maos_a_arte",
    synchronize: true, // Isso ajuda a reconhecer a tabela
    logging: false,
    entities: [Order], // <--- ADICIONE AQUI!
    subscribers: [],
    migrations: [],
});

module.exports = { AppDataSource };