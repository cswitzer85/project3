'use strict';
module.exports = (sequelize, DataTypes) => {
  const toppings = sequelize.define('toppings', {
    name: DataTypes.STRING
  }, {});
  toppings.associate = function(models) {
    // associations can be defined here
  };
  return toppings;
};