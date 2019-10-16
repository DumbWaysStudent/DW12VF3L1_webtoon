'use strict';
module.exports = (sequelize, DataTypes) => {
  const comic = sequelize.define('comic', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  comic.associate = function(models) {
    // associations can be defined here
    comic.hasMany(models.episode,{
      foreignKey:'comicId',
    })
  };
  return comic;
};
