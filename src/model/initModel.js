//Importamos los modelos
const Users = require('./users.model');
const Roles = require('./roles.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');
const SubCategories = require('./sub_categories.model');



const initModel = () => {

    //Un usuario puede tener un solo rol: 1
    Users.belongsTo(Roles, { foreignKey: "rolId" });
    //Un rol puede pertenecer a muchos usuarios: M
    Roles.hasMany(Users, { foreignKey: "rolId" });

    //Una tarea puede pertenecer a un solo usuario: 1
    Todos.belongsTo(Users, { foreignKey: "userId" });
    //Un usuario puede tener muchas tareas: M
    Users.hasMany(Todos, { foreignKey: "userId" });

    //Una tarea puede tener una sola categoría: 1
    Todos.belongsTo(Categories, { foreignKey: "categoryId" });
    //Una categoría pertenecer a muchas tareas: M
    Categories.hasMany(Todos, { foreignKey: "categoryId"});

    //Una subcategoría pertenece a una sola categoría
    SubCategories.belongsTo(Categories, { foreignKey: "categoryId" });
    //Una categoría puede tener muchas subcategorías
    Categories.hasMany(SubCategories, { foreignKey: "categoryId" });
    
}

module.exports = initModel;