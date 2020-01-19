'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('follows', [
      {
        user_id:1,
        follow_user_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:2,
        follow_user_id:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:1,
        follow_user_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:3,
        follow_user_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:4,
        follow_user_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:3,
        follow_user_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
