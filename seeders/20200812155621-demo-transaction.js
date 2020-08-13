"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("transactions", [
      {
        id: 1,
        counterQty: 2,
        total: 247960000,
        status: "Waiting Payment",
        attachment: "bca.jpg",
        tripId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("transactions", null, {});
  },
};
