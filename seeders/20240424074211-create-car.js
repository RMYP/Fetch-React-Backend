'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cars', 
    [
      {
        manufacture: "Ford",
        model: "F150",
        image: "car01.min.jpg",
        rentPerDay: 200000,
        carSize: "small",
        capacity: 2,
        year: 2022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "BMW",
        model: "X5",
        image: "car01.min.jpg",
        rentPerDay: 800000,
        carSize: "small",
        capacity: 2,
        year: 2019,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Lincoln",
        model: "MKZ",
        image: "car01.min.jpg",
        rentPerDay: 900000,
        carSize: "medium",
        capacity: 4,
        year: 2022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "BMW",
        model: "M5",
        image: "car01.min.jpg",
        rentPerDay: 900000,
        carSize: "large",
        capacity: 2,
        year: 2018,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Lincoln",
        model: "Navigator",
        image: "car01.min.jpg",
        rentPerDay: 200000,
        carSize: "medium",
        capacity: 2,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Ford",
        model: "Fiesta",
        image: "car01.min.jpg",
        rentPerDay: 200000,
        carSize: "small",
        capacity: 2,
        year: 2016,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Honda",
        model: "Accord",
        image: "car01.min.jpg",
        rentPerDay: 900000,
        carSize: "large",
        capacity: 4,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Buick",
        model: "LaCrosse",
        image: "car01.min.jpg",
        rentPerDay: 1000000,
        carSize: "large",
        capacity: 6,
        year: 2012,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "BMW",
        model: "X5",
        image: "car01.min.jpg",
        rentPerDay: 300000,
        carSize: "medium",
        capacity: 4,
        year: 2018,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Chevy",
        model: "Malibu",
        image: "car01.min.jpg",
        rentPerDay: 200000,
        carSize: "small",
        capacity: 2,
        year: 2022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "BMW",
        model: "X3",
        image: "car01.min.jpg",
        rentPerDay: 200000,
        carSize: "medium",
        capacity: 4,
        year: 2015,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacture: "Chevy",
        model: "Malibu",
        image: "car01.min.jpg",
        rentPerDay: 900000,
        carSize: "large",
        capacity: 6,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
