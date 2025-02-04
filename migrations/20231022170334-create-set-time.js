'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SetTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER
      },
      stageId: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.DATE
      },
   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SetTimes');
  }
};