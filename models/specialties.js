"use strict";
module.exports = (sequelize, DataTypes) => {
  const Specialties = sequelize.define(
    "Specialties",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {}
  );
  Specialties.associate = function (models) {
    // associations can be defined here
  };
  return Specialties;
};
