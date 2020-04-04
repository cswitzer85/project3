"use strict";
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      name: DataTypes.STRING,
      // ingredients: DataTypes.STRING,
      userOrder: DataTypes.STRING,
      userAddress: DataTypes.STRING,
      delivery: DataTypes.BOOLEAN,
    },
    {}
  );
  Orders.associate = function (models) {
    // associations can be defined here
  };
  return Orders;
};
