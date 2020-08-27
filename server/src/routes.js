//Importing express lib
const express = require('express');

//Validation
const { body } = require('express-validator');

// Importing the functionallities from userController class
const UserController = require('./controllers/UserController');

// Using a feature from express lib to deal with routes
const routes = express.Router();

//Routes and its functionallities
routes.get('/index',UserController.index);
routes.post('/create', [
    body('name').isLength({ min: 3, max: 15}), 
    body('email').isEmail()
], UserController.create);

// Exporting routes to use on server.js
module.exports = routes;