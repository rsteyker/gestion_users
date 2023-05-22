//Importamos el middlewares
const Todos = require('../model/todos.model');
const Categories = require('../model/categories.model');
const Users = require('../model/users.model');


//Crea todas las tareas
const createTodos = async (req, res) => {
    try {
        const newTodos = req.body;
        await Todos.create(newTodos);
        res.status(201).send();

    } catch (error) {
        res.status(400).json(error);
    }
}

//obtiene todas las tareas de un usuario incluidas sus categorias
const obtenerTodosUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const todos = await Todos.findByPk(id, {
            attributes: {
                exclude: ['userId', 'categoryId']
            },
            
            include: [
                {
                    model: Users,
                    attributes: ['id', 'username']
                },
                {
                    model: Categories,
                    attributes: ['id', 'name'],
                },
            ]
        });
        res.json(todos);

    } catch (error) {
        res.status(400).json(error);
    }
}

//Eliminar todos
const deleteTodos = async (req, res) => {
    try {
        const {id} = req.params;
        await Todos.destroy({
            where: {id}
        });
        res.status(204).send();

    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createTodos,
    obtenerTodosUsers,
    deleteTodos
};