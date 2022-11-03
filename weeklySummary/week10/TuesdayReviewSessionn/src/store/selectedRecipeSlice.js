import { createSlice } from "@reduxjs/toolkit";

// const [loading, setLoading] = useState(false) 

const initialState = {
    recipe: {},
    loadingRecipe: false
};

export const selectedRecipeSlice = createSlice({
    name: "selectedRecipe",
    initialState,
    reducers: {
        setRecipe: (state, action) => {
            state.recipe = action.payload;
        },
        setLoading: (state, action) => {
            state.loadingRecipe = action.payload;
        },
        resetSelectedRecipe: (state) => {
            console.log(initialState);
            state.recipe = initialState.recipe;
            state.loadingRecipe = initialState.loadingRecipe;
        }
    }
});

export const { setRecipe, setLoading, resetSelectedRecipe } = selectedRecipeSlice.actions;
export default selectedRecipeSlice.reducer;