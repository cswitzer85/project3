'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Specialties', [{
        name: "The Zealot",
        description: "Beef pepperoni, sausage, salami, black olives, red onions, mushrooms, red bell, chives",
        image: "https://zalatpizza.com/wp-content/uploads/2016/08/Zealot-JPG-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Pho Shizzle",
        description: "Chicken, red bell peppers, caramelized onions, cilantro, basil, hoisin & sriracha swirl",
        image: "https://zalatpizza.com/wp-content/uploads/2015/01/Pho-Shizzle-JPG-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "The Hottie",
        description: "Beef pepperoni, crushed red pepper, jalapeños, Tabasco & sriracha",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/The-Hottie-1-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Pineapple Express",
        description: "Bacon, pineapple, crushed red pepper, cilantro, Teriyaki sauce base and swirl",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Pineapple-Express-1-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Elote",
        description: "Corn, lemon pepper seasoning, parmesan, cilantro garnish, Valentina swirl & Sirancha™",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Elotes-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "The OG",
        description: "Beef pepperoni, salami, cracked black pepper & pickled giardiniera",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/OG-1-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Buffalo Chicken",
        description: "Frank’s Hot Sauce, chicken, chives, blue cheese ranch",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Buffalo-Chicken-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Loaded Notato",
        description: "Sirancha™, mozzarella and cheddar cheese mix, bacon, jalapeños, chives and blue cheese ranch",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Loaded-Notato-Zalat-Pizza-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Pepperoni",
        description: "We use all-beef pepperoni and Grande cheese",
        image: "https://zalatpizza.com/wp-content/uploads/2017/02/Pepperoin-JPG-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "NYC",
        description: "Super thin, slightly greasy, with extra oregano and Grande mozzarella. Cheese, pepperoni or sausage only.",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/NY-Sausage-Zalat-Pizza-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Magherita",
        description: "Sliced Roma tomatoes, roasted grape tomatoes, fresh mozz, basil, balsamic glaze & Greek seasoning",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Margherita-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Meatza",
        description: "Beef pepperoni, sausage, salami & bacon, mmmmm, bacon",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Meatza-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Cheese",
        description: "Cheese with more cheese",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Cheese-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Simple Basil",
        description: "Beef pepperoni, cracked black pepper & fresh basil",
        image: "https://zalatpizza.com/wp-content/uploads/2017/03/Simple-Basil-1-360x360.png",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "The Veggie",
        description: "Spinach, mushrooms, red onions, black olives, red bell peppers and basil",
        image: "https://zalatpizza.com/wp-content/uploads/2015/01/The-Veggie-JPG-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "The Crave",
        description: "Beef pepperoni, salami, cracked black pepper and red onions",
        image: "https://zalatpizza.com/wp-content/uploads/2015/01/The-Crave-JPG-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      },{
        name: "Chicken Teriyaki",
        description: "Chicken, red onions, Teriyaki sauce base & swirl, cracked black pepper, cilantro garnish",
        image: "https://zalatpizza.com/wp-content/uploads/2015/01/Chicken-Teriyaki-JPG-360x360.jpg",
        createdAt: "2020-02-04 00:00:00"
,
        updatedAt: "2020-02-04 00:00:00"

      }], {});
  },

  down: (queryInterface, Sequelize) => {

       return queryInterface.bulkDelete('Specialties', null, {});
  
  }
};
