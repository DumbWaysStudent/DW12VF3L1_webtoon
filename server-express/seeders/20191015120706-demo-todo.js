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

    return queryInterface.bulkInsert('todos', [
      {
        title: 'Renang bareng Aura Kasih',
        is_done: 0,
        created_by: 1
      },
      {
        title: 'Makan bareng Julia Estelle',
        is_done: 1,
        created_by: 2
      },
      {
        title: 'Tidur dengan Ariel Tatum',
        is_done: 0,
        created_by: 2
      },
      {
        title: 'Lari pagi bersama Intan Nuraini',
        is_done: 1,
        created_by: 3
      },
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
