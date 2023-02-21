'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      actor.belongsToMany(models.movie,{through: models.movie_actors , foreignKey: 'actor_id',} )
    }
  }
  
  actor.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'actor',
  });
  return actor;
};