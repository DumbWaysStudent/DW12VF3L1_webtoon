'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    comicId: DataTypes.INTEGER
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
    episode.belongsTo(models.comic,{
      foreignKey:'comicId',
    })
    episode.hasMany(models.page,{
      foreignKey:'episodeId',
    })
  };
  return episode;
};
