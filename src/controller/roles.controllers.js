const Roles = require('../model/roles.model');


const createRoles = async (req, res) => {
    try {
        const newRoles = req.body;
        await Roles.create(newRoles)
        res.status(201).send();
        
    } catch (error) {
        res.status(400).json();
    }
}


module.exports = {
    createRoles
}