import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe, setAllRecipes } from '../store/allRecipesSlice';

const CreateRecipeForm = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [timeToMake, setTimeToMake] = useState(0);

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

        // dispatch(addRecipe(newRecipe));
        await axios.post('/api/recipes', newRecipe);

        const newData = await axios.get('/api/recipes');
        dispatch(setAllRecipes(newData.data));
    }

    return (
        <div>
            <h1>Create Recipe</h1>
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

export default CreateRecipeForm;