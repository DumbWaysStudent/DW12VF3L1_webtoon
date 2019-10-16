'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('episodes', [
      {
        "title": "Ep. 1",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "comicId": 1
        },
        {
        "title": "Ep. 2",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "comicId": 1
        },
        {
        "title": "Ep. 3",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "comicId": 1
        }
    ])
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
