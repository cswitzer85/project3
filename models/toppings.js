'use strict';
module.exports = (sequelize, DataTypes) => {
  const Toppings = sequelize.define('Toppings', {
    name: DataTypes.STRING
  }, {});
  Toppings.associate = function(models) {
    // associations can be defined here
  };
  return Toppings;
};