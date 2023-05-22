"use strict";

//Importamos el middleware
var Users = require("../model/users.model");

var Todos = require("../model/todos.model"); //Crea los users


var createUser = function createUser(req, res) {
  var _req$body, username, email, password;

  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //Validamos la información
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password; //Aseguramos de que no venga los campos vacíos

          if (!(typeof username !== "string" || !username)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Usuario invalida",
            message: "El nombre de usuario no puede ser nulo o diferente a la cadena de texto"
          }));

        case 4:
          if (!(typeof email !== "string" || !email)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Email invalida",
            message: "El nombre del mail no puede ser nulo o diferente a la cadena de texto"
          }));

        case 6:
          if (!(typeof password !== "string" || !password)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Password invalida",
            message: "Password no puede ser nulo o diferente a la cadena de texto"
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(Users.create({
            username: username,
            email: email,
            password: password
          }));

        case 10:
          res.status(201).send();
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(400).json(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
}; //Cambiar el atributo complited de una tarea


var updateTodos = function updateTodos(req, res) {
  var id, complited;
  return regeneratorRuntime.async(function updateTodos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          complited = req.body.complited;
          _context2.next = 5;
          return regeneratorRuntime.awrap(Todos.update({
            complited: complited
          }, {
            where: {
              id: id
            }
          }));

        case 5:
          res.status(204).send();
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = {
  createUser: createUser,
  updateTodos: updateTodos
};
//# sourceMappingURL=users.controllers.dev.js.map
