const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// Importing database connection
require('./database');

//Assiging express features to a const
const app = express();

//To allow outside apis to access the content of this api
app.use(cors());
//express.json() to be able to deal with json
app.use(express.json());
//Usingn routes features from routes.js
app.use(routes);

//Express is listening to port 3333
app.listen(3333);