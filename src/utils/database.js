//Importamos sequelize
const {Sequelize} = require('sequelize');
require('dotenv').config();

//Crear una instancia de sequelize en la configuración de conexión
const db = new Sequelize({
    host: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    dialectOptions: { ssl: { require: true, rejectUnauthoried: false } },
});


module.exports = db;
