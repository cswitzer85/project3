"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Toppings",
      [
        {
          name: "Bacon",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Balsamic Glaze",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Basil",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Beef Pepperoni",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Black Olives",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Blue Cheese Ranch",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Caramelized Onions",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Cheddar",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Chicken",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Chives",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Cilantro",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Corn",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Cracked Black Pepper",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Crushed Red Pepper",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Franks Hot Sauce",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Greek Seasoning",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Hoisin",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Jalapeños",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Lemon Pepper",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Mozzarella",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Mushroom",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Oregano",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Parmesan",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Pickled Giardiniera",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Pineapple",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Red Bell",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Red Onions",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Roasted Grape Tomatoes",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Salami",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Sausage",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Sliced Roma Tomatoes",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Spinach",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Sriracha",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Tabasco",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Teriyaki",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "Valentina",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        }

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Toppings", null, {});
  }
};
