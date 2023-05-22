//Importar la db
const db = require('../utils/database');

//Importar DataTypes
const { DataTypes } = require('sequelize');

//Crear el modelo
const SubCategories = db.define('sub_categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
}, {
    timestamps: false,
});


module.exports = SubCategories;