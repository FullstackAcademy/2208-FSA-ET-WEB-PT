// GET localhost:3000/api/recipes
// GET /


const express = require('express');
const { Recipe, Ingredient } = require('../db');
const router = express.Router();

// GET localhost:3000/api/recipes
router.get('/', async (req, res, next) => {
    const recipes = await Recipe.findAll();
    res.send(recipes);
})

// GET localhost:3000/api/recipes/:id
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const recipe = await Recipe.findByPk(id, {
        include: [Ingredient]
    });
    res.send(recipe);
})

router.post('/', async (req, res, next) => {
    const {
        name,
        author,
        timeToMake,
    } = req.body;

    await Recipe.create({
        name,
        author,
        timeToMake
    });

    // const ingredientToAdd = await Ingredient.findByPk(ingredientId)
    // recipe.addIngredient(ingredientToAdd)

    res.sendStatus(204);
})

router.put('/:id', async (req, res, next) => {
    // Read data from the user input
    const { id } = req.params;
    const {
        name,
        author,
        timeToMake
    } = req.body;

    // Validate data if need
    // Null = A human decided to leave this empty
    // Undefined = A computer decided to leave this empty

    // Use the data to update your db
    const recipe = await Recipe.findByPk(id);
    recipe.update({
        name,
        author,
        timeToMake
    });
    res.send(200)
});

router.delete('/:recipeId', async (req, res, next) => {
    const notFoundMessage = "The recipe you're trying to delete doesn't exist!";
    try {
        const { recipeId } = req.params;
        const recipe = await Recipe.findByPk(recipeId);

        // If recipe does not exist / if recipe is null
        if (!recipe) {
            throw new Error(notFoundMessage);
        }

        await recipe.destroy();
        res.sendStatus(204);
    } catch (err) {
        if (err.message === notFoundMessage)
            return res.status(404).send({ message: notFoundMessage });

        console.error(err);
        next(err);
    }
});

module.exports = router;

    // original = {
    //     name: "Soup",
    //     author: "Ben",
    //     timeToMake: 132453,
    // }


    // req.body = {
    //     name: undefined,
    //     author: "Louis",
    //     timeToMake: undefined
    // }