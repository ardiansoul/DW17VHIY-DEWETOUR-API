"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        fullName: "spiderman",
        email: "spiderman@gmail.com",
        password: "lovespiderman",
        phone: "083896833123",
        Address: "di mana aja boleh lah yak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        fullName: "Haris",
        email: "harisman@gmail.com",
        password: "harisganteng",
        phone: "083896822122",
        Address: "Deket rumah surti jelaskan yaakk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        fullName: "surti",
        email: "surti@gmail.com",
        password: "surticantik",
        phone: "089922476211",
        Address: "deket rumah haris ganteng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
