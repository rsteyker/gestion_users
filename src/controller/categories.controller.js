const Categories = require('../model/categories.model');


const createCategories = async (req, res) => {
    try {
        const newCategories = req.body;
        await Categories.create(newCategories);
        res.status(201).send();

    } catch (error) {
        res.status(400).json();
    }
}

module.exports = {
    createCategories
}