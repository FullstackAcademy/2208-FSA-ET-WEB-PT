/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import selectedRecipeReducer from "./selectedRecipeSlice";

const store = configureStore({
  reducer: {
    selectedRecipe: selectedRecipeReducer
  }
});

export default store;