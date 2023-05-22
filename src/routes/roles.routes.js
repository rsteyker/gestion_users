const { Router } = require('express');

const { createRoles } = require('../controller/roles.controllers')



//Instanciamos router
const router = Router();

router.post('/roles', createRoles );

module.exports = router;