//Importamos el middleware
const Users = require("../model/users.model");
const Todos = require("../model/todos.model");

//Crea los users
const createUser = async (req, res) => {
    try {
        //Validamos la información
        const { username, email, password } = req.body;

        //Aseguramos de que no venga los campos vacíos
        if (typeof(username) !== "string" || !username) {
            return res.status(400).json({
                error: "Usuario invalida",
                message: "El nombre de usuario no puede ser nulo o diferente a la cadena de texto" 
            })
        }
        if (typeof(email) !== "string" || !email) {
            return res.status(400).json({
                error: "Email invalida",
                message: "El nombre del mail no puede ser nulo o diferente a la cadena de texto" 
            })
        }
        if (typeof(password) !== "string" || !password) {
            return res.status(400).json({
                error: "Password invalida",
                message: "Password no puede ser nulo o diferente a la cadena de texto" 
            })
        }

        await Users.create({username, email, password});
        res.status(201).send();
        
    } catch (error) {
        res.status(400).json(error);
    }
}

//Cambiar el atributo complited de una tarea
const updateTodos = async (req, res) => {
    try {
        const {id} = req.params;
        const {complited } = req.body;

        await Todos.update({complited}, {
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = {
    createUser,
    updateTodos
};