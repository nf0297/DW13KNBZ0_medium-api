'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        article_id:1,
        user_id:2,
        content:'Nice article!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        article_id:2,
        user_id:3,
        content:'This article is so helpful!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        article_id:1,
        user_id:1,
        content:'Your article is life-changing!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        article_id:3,
        user_id:4,
        content:'What is this article about?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        article_id:4,
        user_id:2,
        content:'Keep up the good work!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        article_id:5,
        user_id:4,
        content:'This article is easy to understand!',
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
