import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRecipe } from '../store/allRecipesSlice';

const cardStyles = { backgroundColor: "lightblue" };
const RecipeCard = ({ recipe }) => {
    const [deleteError, setDeleteError] = useState(false);
    const dispatch = useDispatch();

    const handleRecipeDelete = async () => {
        try {
            dispatch(deleteRecipe(recipe.id));

            await axios.delete(`
                /api/recipes/${recipe.id}
            `);

            const response = await axios.get('/api/recipes');
            dispatch(setAllRecipes(response.data));
        } catch (err) {
            console.error(err);
            setDeleteError(true);
        }
    }

    const singleRecipePageUrl = `/recipes/${recipe.id}`;
    return (
        <>
            <Link key={recipe.id} to={singleRecipePageUrl}>
                <div style={cardStyles}>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.timeToMake}</p>
                    <p>{recipe.author}</p>
                </div>
            </Link>
            <Button variant="contained" onClick={handleRecipeDelete}>^ Delete Recipe</Button>
            {deleteError &&
                <p style={{ color: "red" }}>
                    Oh no, this recipe was already deleted!
                </p>
            }
        </>
    );
};

export default RecipeCard;