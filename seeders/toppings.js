"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "toppings",
      [
        {
          name: "Bacon",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Balsamic Glaze",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Basil",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Beef Pepperoni",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Black Olives",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Blue Cheese Ranch",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Caramelized Onions",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Cheddar",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Chicken",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Chives",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Cilantro",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Corn",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Cracked Black Pepper",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Crushed Red Pepper",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Franks Hot Sauce",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Greek Seasoning",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Hoisin",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Jalapeños",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Lemon Pepper",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Mozzarella",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Mushroom",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Oregano",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Parmesan",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Pickled Giardiniera",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Pineapple",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Red Bell",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Red Onions",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Roasted Grape Tomatoes",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Salami",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Sausage",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Sliced Roma Tomatoes",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Spinach",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Sriracha",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Tabasco",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Teriyaki",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        },
        {
          name: "Valentina",
          createdAt: "0000-00-00 00:00:00",
          updatedAt: "0000-00-00 00:00:00"
        }

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toppings", null, {});
  }
};
