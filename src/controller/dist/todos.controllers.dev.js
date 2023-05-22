"use strict";

//Importamos el middlewares
var Todos = require('../model/todos.model');

var Categories = require('../model/categories.model');

var Users = require('../model/users.model'); //Crea todas las tareas


var createTodos = function createTodos(req, res) {
  var newTodos;
  return regeneratorRuntime.async(function createTodos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newTodos = req.body;
          _context.next = 4;
          return regeneratorRuntime.awrap(Todos.create(newTodos));

        case 4:
          res.status(201).send();
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //obtiene todas las tareas de un usuario incluidas sus categorias


var obtenerTodosUsers = function obtenerTodosUsers(req, res) {
  var id, todos;
  return regeneratorRuntime.async(function obtenerTodosUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Todos.findByPk(id, {
            attributes: {
              exclude: ['userId', 'categoryId']
            },
            include: [{
              model: Users,
              attributes: ['id', 'username']
            }, {
              model: Categories,
              attributes: ['id', 'name']
            }]
          }));

        case 4:
          todos = _context2.sent;
          res.json(todos);
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
}; //Eliminar todos


var deleteTodos = function deleteTodos(req, res) {
  var id;
  return regeneratorRuntime.async(function deleteTodos$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Todos.destroy({
            where: {
              id: id
            }
          }));

        case 4:
          res.status(204).send();
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(400).json(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = {
  createTodos: createTodos,
  obtenerTodosUsers: obtenerTodosUsers,
  deleteTodos: deleteTodos
};
//# sourceMappingURL=todos.controllers.dev.js.map
