"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeApp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeApp.init(
    {
      // id: DataTypes.INTEGER,
      // id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      instructions: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "RecipeApp",
      tableName: "recipe_apps", // explicit snake cased table name
      underscored: true, // this option converts camelCased columns to snake_case in the DB
    }
  );
  return RecipeApp;
};
