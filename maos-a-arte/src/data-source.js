const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin", // O que você colocou no docker-compose
    password: "password123",
    database: "maos_a_arte",
    synchronize: true, // Isso cria as tabelas automaticamente para o seu trabalho
    logging: true,
    entities: ["./src/domain/entities/*.js"], // Onde estão suas classes
});

module.exports = { AppDataSource };