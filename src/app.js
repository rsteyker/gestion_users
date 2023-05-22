//Importar express
const express = require('express');
const db = require('./utils/database');
require('dotenv').config();
const initModel = require('./model/initModel');
const cors = require('cors');

const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const rolesRoutes = require('./routes/roles.routes');
const categoriesRoutes = require('./routes/categories.routes');


//Ejecutamos la función InitModel
initModel();

//Creamos la instancia
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

//Ejecutamos el método authenticate
db.sync()
.then(() => {
    console.log('Base de datos sincronizada')
})
.catch(error => console.log(error));

app.get('/', (req, res) => {
    res.send('Servidor funcionando OK')
});


app.use(userRoutes);
app.use(todosRoutes);
app.use(rolesRoutes);
app.use(categoriesRoutes);


app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
});

