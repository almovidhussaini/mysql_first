'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('permissions',[{
        label:'GET',
        id:'4',
        createdAt: new Date(),
         updatedAt: new Date()
        }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('permissions', null, {});
  }
};
