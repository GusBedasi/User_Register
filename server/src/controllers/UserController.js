const express = require('express');

const {validationResult } = require('express-validator');

const User = require('../models/User');

module.exports = {

    async index(request, response) {
        const users = await User.findAll();

        return response.send(users);
    },

    async create(request, response) {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            console.log({ errors: errors.array() });
            return response.status(400).send({ errors: errors.array() });
        }
        
        const { name, email } = request.body;

        try {
            console.log("Request incoming:", name, email)
            const user = await User.create({ name, email });

            return response.send(user).status(202);
        } catch (error) {
            return response.send(error).status(400);
        }

    }
}