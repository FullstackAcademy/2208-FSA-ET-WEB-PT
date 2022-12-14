/*
 * Here is where you will configure the store 
 */ 

import { configureStore } from "@reduxjs/toolkit";
import allRecipesReducer from "./allRecipesSlice";
import selectedRecipeReducer from "./selectedRecipeSlice";

const store = configureStore({
  reducer: {
    selectedRecipe: selectedRecipeReducer,
    allRecipes: allRecipesReducer
  }
});

export default store;