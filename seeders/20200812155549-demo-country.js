"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("countries", [
      {
        name: "Australia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "South Korea",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Japan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("country", null, {});
  },
};
