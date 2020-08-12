"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("trips", [
      {
        title: "6D/4M Fun Tassie Vacation + Sydney",
        countryId: 1,
        accommodation: "Hotel 4 Nights",
        transportation: "Qatar Airways",
        eat: "Included as ltinerary",
        day: 6,
        night: 4,
        dateTrip: "26 August 2020",
        price: 12398000,
        quota: 15,
        description: "liburan ke australia kali ini asik sekali boy",
        image: "ausi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "6D/4M Exciting Summer in South Korea",
        countryId: 2,
        accommodation: "Hotel 4 Nights",
        transportation: "Anyong Airline",
        eat: "Included as ltinerary",
        day: 6,
        night: 4,
        dateTrip: "30 October 2020",
        price: 10198000,
        quota: 15,
        description: "liburan ke Korea Selatan nampak nya asik kali boy",
        image: "korsel.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "6D/4M Wonderful Autum in Japan",
        countryId: 4,
        accommodation: "Hotel 6 Nights",
        transportation: "Qatar Airways",
        eat: "Included as ltinerary",
        day: 8,
        night: 6,
        dateTrip: "28 September 2020",
        price: 14398000,
        quota: 15,
        description: "liburan ke Jepang di musim gugur mantap bah",
        image: "ausi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trips", null, {});
  },
};
