'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: "ONEZERO",
        createdAt: new Date(),
        updatedAt: new Date(),
        is_active: true
      },
      {
        name: "GEN",
        createdAt: new Date(),
        updatedAt: new Date(),
        is_active: true
      },
      {
        name: "MARKER",
        createdAt: new Date(),
        updatedAt: new Date(),
        is_active: true
      },
      {
        name: "FORGE",
        createdAt: new Date(),
        updatedAt: new Date(),
        is_active: true
      },
      {
        name: "LEVEL",
        createdAt: new Date(),
        updatedAt: new Date(),
        is_active: true
      },
      {
        name: "MODUS",
        createdAt: new Date(),
        updatedAt: new Date(),
        is_active: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
