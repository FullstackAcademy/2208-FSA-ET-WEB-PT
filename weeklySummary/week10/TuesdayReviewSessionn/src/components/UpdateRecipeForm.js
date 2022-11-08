import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAllRecipes } from '../store/allRecipesSlice';
import { setRecipe, updateSelectedRecipe } from '../store/selectedRecipeSlice';

const UpdateRecipeForm = ({ selectedRecipe }) => {
    const [name, setName] = useState(selectedRecipe.name);
    const [timeToMake, setTimeToMake] = useState(selectedRecipe.timeToMake);
    const [author, setAuthor] = useState(selectedRecipe.author);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleTimeToMakeChange = (event) => {
        setTimeToMake(event.target.value);
    }

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newRecipe = {
            name,
            author,
            timeToMake
        }

        // Updating the back-end with our new recipes fields        

        axios.put(`/api/recipes/${selectedRecipe.id}`, newRecipe);

        dispatch(updateSelectedRecipe(newRecipe));
        // Update selected recipe to have its updated contents
        // const newSelectedRecipe = await axios.get(`/api/recipes/${selectedRecipe.id}`);
        // dispatch(setRecipe(newSelectedRecipe.data));
        // dispatch(updateSelectedRecipe(newRecipe));

        // Grab a list of all recipes from backend including updated recipes contents
        const allNewRecipes = await axios.get('/api/recipes');
        dispatch(setAllRecipes(allNewRecipes.data));
    }

    return (
        <div>
            <h1>Update Recipe</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" }}>
                <label>Name: </label>
                <input type={"text"} value={name} onChange={handleNameChange} />
                <label>Time To Make: </label>
                <input type={"number"} value={timeToMake} onChange={handleTimeToMakeChange} />
                <label>Author: </label>
                <input type={"text"} value={author} onChange={handleAuthorChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UpdateRecipeForm;