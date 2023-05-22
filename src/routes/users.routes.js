//Importamos router
const { Router } = require('express');
const { 
    createUser, 
    updateTodos,  
} = require('../controller/users.controllers');

//Instanciamos
const router = Router();

router.post('/users', createUser);

router.put('/todos/:id', updateTodos);

module.exports = router;