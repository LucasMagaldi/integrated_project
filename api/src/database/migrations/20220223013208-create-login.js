'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('login', { 
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIcrement: true,
        allowNull: false
        },
       name: {
         type: Sequelize.STRING, 
         allowNull: false
         },
       email: {
           type: Sequelize.STRING, 
           allowNull: false
       },
       info: {
           type: Sequelize.STRING, 
           allowNull: false
         },
       created_at: {
         type: Sequelize.DATE, 
         allowNull: false
         },
       updated_at: {
         type: Sequelize.DATE, 
         allowNull: false
          }, 
     });
     
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('login');
  }
};
