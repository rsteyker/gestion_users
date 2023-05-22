const { Router } = require('express');

const { createCategories } = require('../controller/categories.controller');

const router = Router();

router.post('/categories', createCategories);



module.exports = router;