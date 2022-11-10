import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllRecipes } from '../store/allRecipesSlice';
import { Link } from 'react-router-dom';
import CreateRecipeForm from './CreateRecipeForm';
import RecipeCard from './RecipeCard';

const RecipesPage = () => {
    const { recipes } = useSelector(state => state.allRecipes);

    return (
        <div>
            <h1 style={{ fontFamily: 'Roboto', sansSerif: true }}>Recipes</h1>
            <CreateRecipeForm />
            {recipes.map((recipe) =>
                <RecipeCard key={recipe.id} recipe={recipe} />
            )}
        </div >
    );
};

export default RecipesPage;