'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullname: "Freya Allan",
        image: "https://external-preview.redd.it/dWsI-_W4DacNR30L5PAdLrbPUdtCKE7bf0yQzXaJlcs.jpg?auto=webp&s=90eb47263d70f9b87f8347dde111d1d6bb2f749d",
        username: "freya",
        password: "freya",
        email: "freya@freya.com",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Aimer",
        image: "https://cdnx.natalie.mu/media/pp/static/music/aimer15/photo04.jpg",
        username: "aimer",
        password: "aimer",
        email: "aimer@aimer.com",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Lee Ji-eun",
        image: "https://asset.kompas.com/crops/bw0QAj68dglRsBgxXbWXflA79TM=/82x0:886x536/750x500/data/photo/2018/05/08/1328492635.jpg",
        username: "iu",
        password: "iu",
        email: "iu@iu.com",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Chelsea Islan",
        image: "https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435915-chelsea-islan.jpg",
        username: "chelsea",
        password: "chelsea",
        email: "chelsea@chelsea.com",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
