import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllRecipes } from '../store/allRecipesSlice';
import { Link } from 'react-router-dom';
import CreateRecipeForm from './CreateRecipeForm';

const RecipesPage = () => {
    const { recipes } = useSelector(state => state.allRecipes);

    return (
        <div>
            <h1>Recipes</h1>
            <CreateRecipeForm />
            {recipes.map((recipe) =>
                <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
                    <div style={{ backgroundColor: "lightblue" }}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.timeToMake}</p>
                        <p>{recipe.author}</p>
                    </div>
                </Link>
            )
            }
        </div >
    );
};

export default RecipesPage;