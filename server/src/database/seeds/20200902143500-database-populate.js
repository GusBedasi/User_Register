'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Gustavo',
        email: 'teste1@gmail.com',
        created_at: new Date,
        updated_at: new Date
      },
      {
        name: 'Nicolle',
        email: 'teste2@gmail.com',
        created_at: new Date,
        updated_at: new Date
      },
      {
        name: 'Thales',
        email: 'teste3@gmail.com',
        created_at: new Date,
        updated_at: new Date
      },
      {
        name: 'Fabao',
        email: 'teste4@gmail.com',
        created_at: new Date,
        updated_at: new Date
      }
      ,{
        name: 'Chancha',
        email: 'teste5@gmail.com',
        created_at: new Date,
        updated_at: new Date
      },
      {
        name: 'Melissa',
        email: 'teste6@gmail.com',
        created_at: new Date,
        updated_at: new Date
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
