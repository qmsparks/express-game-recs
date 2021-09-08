'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Game.hasMany(models.Review);
      models.Game.belongsToMany(models.User, {through:'UserLibrary'});
      models.Game.belongsToMany(models.User, {through: 'UserWislist'});
    }
  };
  Game.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    description: DataTypes.TEXT,
    minPlayers: DataTypes.INTEGER,
    maxPlayers: DataTypes.INTEGER,
    playTime: DataTypes.STRING,
    requiresGM: DataTypes.BOOLEAN,
    storeLink: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};