const db = require('./db');
const Recipe = require('./recipe');
const Ingredient = require('./ingredient');
const User = require("./user");
Recipe.belongsToMany(Ingredient, { through: "RecipesIngredients" });
Ingredient.belongsToMany(Recipe, { through: "RecipesIngredients" });

// Recipe.belongsToMany(Ingredient, { through: "PossibleExtraIngredients" });
// Ingredient.belongsToMany(Recipe, { through: "PossibleExtraIngredients" });

// Recipe.addIngredients

// Ingredients.addRecipes

module.exports = {
    db,
    Recipe,
    Ingredient,
    User
};