'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here

    user.hasMany(models.comic,{
      foreignKey: 'userId'
    })
  };
  return user;
};
