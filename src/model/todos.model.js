//Importamos la db
const db = require('../utils/database');

//Importamos DataType
const { DataTypes } = require('sequelize');

//Definimos el modelo
const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    complited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
        allowNull: false,
    },
    
}, {
    timestamps: false,
});


module.exports = Todos;