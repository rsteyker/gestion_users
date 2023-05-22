//Importamos el db
const db = require('../utils/database');

//Imporatamos el DataTypes
const { DataTypes } = require('sequelize');

//Definimos un modelo
const Roles = db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Roles;

