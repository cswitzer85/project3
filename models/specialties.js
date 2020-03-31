'use strict';
module.exports = (sequelize, DataTypes) => {
  const specialties = sequelize.define('specialties', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  specialties.associate = function(models) {
    // associations can be defined here
  };
  return specialties;
};