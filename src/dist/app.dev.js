"use strict";

//Importar express
var express = require('express');

var db = require('./utils/database');

require('dotenv').config();

var initModel = require('./model/initModel');

var cors = require('cors');

var userRoutes = require('./routes/users.routes');

var todosRoutes = require('./routes/todos.routes');

var rolesRoutes = require('./routes/roles.routes');

var categoriesRoutes = require('./routes/categories.routes'); //Ejecutamos la función InitModel


initModel(); //Creamos la instancia

var app = express();
app.use(cors());
app.use(express.json());
var PORT = process.env.PORT || 8000; //Ejecutamos el método authenticate

db.sync().then(function () {
  console.log('Base de datos sincronizada');
})["catch"](function (error) {
  return console.log(error);
});
app.get('/', function (req, res) {
  res.send('Servidor funcionando OK');
});
app.use(userRoutes);
app.use(todosRoutes);
app.use(rolesRoutes);
app.use(categoriesRoutes);
app.listen(PORT, function () {
  console.log("servidor escuchando en el puerto ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
