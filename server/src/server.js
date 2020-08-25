const express = require('express');
const routes = require('./routes');

// Importing database connection
require('./database');

//Assiging express features to a const
const app = express();

//express.json() to be able to deal with json
app.use(express.json());
//Usingn routes features from routes.js
app.use(routes);

//Express is listening to port 3333
app.listen(3333);