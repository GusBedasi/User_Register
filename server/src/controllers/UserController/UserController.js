const express = require('express');

const {validationResult } = require('express-validator');

const EmailController = require('../EmailController/EmailController');

const User = require('../../models/User');

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
            const user = await User.create({ name, email });

            EmailController.mail(name);
            
            return response.status(202).send("Usuario cadastrado com sucesso!");
        } catch (error) {
            return response.send(error).status(400);
        }
    },

    async delete(request, response) {
        const { id } = request.params;
        
        try{
            
            const user = await User.findOne({ where:{
                id
            } })
            
            await User.destroy({ where: { id }});

            return response.send(`Usuario: ${user.name} deletado com sucesso!`).status(200);
        } catch (error) {
            console.error(error);
        }
    }
}