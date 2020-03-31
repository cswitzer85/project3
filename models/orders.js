'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    user_order: DataTypes.STRING,
    user_address: DataTypes.STRING,
    delivery: DataTypes.BOOLEAN
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};