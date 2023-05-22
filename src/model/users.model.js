const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rolId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'rol_id',
    }
}, {
    timestamps: false,
});

module.exports = Users;

