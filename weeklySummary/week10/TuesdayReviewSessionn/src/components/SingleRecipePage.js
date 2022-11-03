import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetSelectedRecipe, setLoading, setRecipe } from '../store/selectedRecipeSlice';

// http://localhost:3000/recipes/1

const SingleRecipePage = () => {
    const { recipeId } = useParams();
    // const [recipe, setRecipe] = useState({});
    // const [loading, setLoading] = useState(false);
    const { recipe, loadingRecipe } = useSelector(state => state.selectedRecipe);
    const dispatch = useDispatch();

    const fetchRecipeById = async (id) => {
        try {
            // setLoading(true);
            dispatch(setLoading(true));
            const response = await axios.get(`/api/recipes/${id}`);

            // setRecipe(response.data);
            dispatch(setRecipe(response.data))
            // setLoading(false);
            dispatch(setLoading(false));
        } catch (err) {
            // setLoading(false);
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        fetchRecipeById(recipeId);

        return () => {
            dispatch(resetSelectedRecipe());
        }
    }, []);

    if (loadingRecipe) return <h1>Loading...</h1>;

    // If recipe === {}
    if (!Object.keys(recipe).length) return <h1>Looks like this recipe is empty / doesn't exist!</h1>

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.timeToMake}</p>
            <p>{recipe.author}</p>
            <h2>Ingredients: </h2>
            {
                recipe.ingredients.map(ingredient => {
                    return <p key={ingredient.id}>- {ingredient.name}</p>
                })
            }
        </div>
    );
};

export default SingleRecipePage;

// const emptyObject = {};
// emptyObject.name // undefined
// emptyObject.ingredients // undefined
// emptyObject.ingredients.map() // ERR: cannot get property 
// // "map" of undefined


// const filledObject = {
//     name: "Recipe",
//     author: "Ben",
//     timeToMake: 20000,
//     ingredients: [
//         {
//             name: "Item"
//         }
//     ]
// }