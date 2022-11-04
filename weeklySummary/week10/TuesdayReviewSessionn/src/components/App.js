import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllRecipes } from '../store/allRecipesSlice';
import RecipesPage from './RecipesPage';
import SingleRecipePage from './SingleRecipePage';
import axios from 'axios';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
    const dispatch = useDispatch();

    const fetchRecipes = async () => {
        const response = await axios.get('/api/recipes');

        dispatch(setAllRecipes(response.data));
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/recipes">
                    <button>Recipes</button>
                </Link>
            </div>

            <Routes>
                <Route path='/recipes' element={<RecipesPage />} />
                <Route path='/recipes/:recipeId' element={<SingleRecipePage />} />
                <Route path='/' element={<h1>Home</h1>} />
            </Routes>
        </div>
    );
};

export default App;