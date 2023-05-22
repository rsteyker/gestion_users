"use strict";

//Importamos la db
var db = require('../utils/database'); //Importamos DataType


var _require = require('sequelize'),
    DataTypes = _require.DataTypes; //Definimos el modelo


var Todos = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  complited: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    field: 'category_id',
    allowNull: false
  }
}, {
  timestamps: false
});
module.exports = Todos;
//# sourceMappingURL=todos.model.dev.js.map
