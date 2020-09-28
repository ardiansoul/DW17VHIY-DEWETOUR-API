"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("countries", [
      {
        id: 1,
        name: "Afghanistan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Armenia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Azerbaijan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Bahrain",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Bangladesh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Bhutan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Brunei",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Cambodia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "China",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "Cyprus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: "Georgia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: "Iran",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: "Iraq",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        name: "Israel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        name: "Japan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        name: "Jordan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        name: "Kazakhstan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        name: "Kuwait",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        name: "Kyrgyzstan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        name: "Laos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        name: "Lebanon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        name: "Malaysia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        name: "Maldives",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        name: "Mongolia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        name: "Myanmar (formerly Burma)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        name: "Nepal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        name: "North Korea",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        name: "Oman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31,
        name: "Pakistan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        name: "Palestine",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33,
        name: "Philippines",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34,
        name: "Qatar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35,
        name: "Russia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36,
        name: "Saudi Arabia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37,
        name: "Singapore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38,
        name: "South Korea",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39,
        name: "Sri Lanka",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40,
        name: "Syria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41,
        name: "Taiwan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42,
        name: "Tajikistan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43,
        name: "Thailand",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44,
        name: "Timor-Leste",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45,
        name: "Turkey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 46,
        name: "Turkmenistan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47,
        name: "United Arab Emirates (UAE)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48,
        name: "Uzbekistan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 49,
        name: "Vietnam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 50,
        name: "Yemen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("countries", null, {});
  },
};