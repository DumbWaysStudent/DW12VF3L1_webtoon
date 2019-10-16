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

    return queryInterface.bulkInsert('users', [
      {
        email: 'irwanto@yahoo.com',
        password: 'irwanto',
        name: 'Irwanto'
      },
      {
        email: 'wibowo@yahoo.com',
        password: 'wibowo',
        name: 'Wibowo'
      },
      {
        email: 'rina@gmail.com',
        password: 'rina',
        name: 'Rina'
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
