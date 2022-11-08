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
        /**
         * Given all of a recipes info, this is going to updated that info
         */
        updateSelectedRecipe: (state, action) => {
            const updatedRecipeInfo = action.payload;
            const oldRecipeInfo = state.recipe;

            state.recipe = {
                ...oldRecipeInfo,
                ...updatedRecipeInfo
            };
        },
        resetSelectedRecipe: (state) => {
            console.log(initialState);
            state.recipe = initialState.recipe;
            state.loadingRecipe = initialState.loadingRecipe;
        }
    }
});

export const { setRecipe, setLoading, resetSelectedRecipe, updateSelectedRecipe } = selectedRecipeSlice.actions;
export default selectedRecipeSlice.reducer;