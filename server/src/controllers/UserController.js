const express = require('express');
const User = require('../models/User');

module.exports = {

    async index(request, response) {
        const users = await User.findAll();

        return response.send(users);
    },

    async create(request, response) {
        const { name, email } = request.body;

        try {
            const user = await User.create({ name, email });

            return response.send(user).status(202);
        } catch (error) {
            return response.send(error).status(400);
        }

    }
}