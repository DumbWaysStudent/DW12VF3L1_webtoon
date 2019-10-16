'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episodeId: DataTypes.INTEGER
  }, {});
  page.associate = function(models) {
    // associations can be defined here
    page.belongsTo(models.episode,{
      foreignKey:'episodeId',
    })
  };
  return page;
};
