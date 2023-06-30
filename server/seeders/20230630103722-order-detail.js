'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const orderDetails = require('../db/orderDetail.json')
    orderDetails.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("OrderDetails", orderDetails, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('OrderDetails', null, {});
  }
};
