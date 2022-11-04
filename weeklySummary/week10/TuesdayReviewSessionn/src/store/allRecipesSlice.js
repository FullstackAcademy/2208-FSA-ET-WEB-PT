import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: []
};

export const allRecipesSlice = createSlice({
    name: "allRecipes",
    initialState,
    reducers: {
        setAllRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        addRecipe: (state, action) => {
            // action.payload // { name, timeToMake, author }
            // [{turkey}, {stuffing}, ... , {new recipe}]
            // state.recipes = [...state.recipes, action.payload];
            state.recipes.push(action.payload);
        }
    }
});

export const { setAllRecipes, addRecipe } = allRecipesSlice.actions;
export default allRecipesSlice.reducer;