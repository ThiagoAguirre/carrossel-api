'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn(
      'users',
      'isLogged',
      {
        type: Sequelize.BOOLEAN
      }
    );
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.removeColumn(
      'users',
      'isLogged',
    );
  }
};