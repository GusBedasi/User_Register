//Importing express lib
const express = require('express');

// Importing the functionallities from userController class
const UserController = require('./controllers/UserController');

// Using a feature from express lib to deal with routes
const routes = express.Router();

//Routes and its functionallities
routes.get('/index', UserController.index);
routes.post('/create', UserController.create);

// Exporting routes to use on server.js
module.exports = routes;