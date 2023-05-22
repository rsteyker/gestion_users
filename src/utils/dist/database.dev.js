"use strict";

//Importamos sequelize
var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

require('dotenv').config(); //Crear una instancia de sequelize en la configuración de conexión


var db = new Sequelize({
  host: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthoried: false
    }
  }
});
module.exports = db;
//# sourceMappingURL=database.dev.js.map
