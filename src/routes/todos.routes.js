//Importamos roter
const { Router } = require('express');

//Creamos la instancia
const router = Router();
const { 
    createTodos, 
    obtenerTodosUsers, 
    deleteTodos 
} = require('../controller/todos.controllers');

router.post('/todos', createTodos);

router.get('/todos/:id', obtenerTodosUsers);

router.delete('/todos/:id', deleteTodos);


module.exports = router;