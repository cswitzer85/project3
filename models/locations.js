"use strict";
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define(
    "Locations",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {}
  );
  Locations.associate = function (models) {
    // associations can be defined here
  };
  return Locations;
};
