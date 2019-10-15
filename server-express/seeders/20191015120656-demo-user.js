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
        email: 'akhi@yahoo.com',
        password: 'ca52febd8be7c4480ae90cdae8438a03',
        name: 'Akhi Akhmad'
      },
      {
        email: 'akhwat@yahoo.com',
        password: 'ca52febd8be7c4480ae90cdae8438a03',
        name: 'Akhwat Jamila'
      },
      {
        email: 'ukhti@yahoo.com',
        password: 'ca52febd8be7c4480ae90cdae8438a03',
        name: 'Ukhti Anisa'
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
