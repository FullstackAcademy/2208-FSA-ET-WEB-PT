import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: ""
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        changeName: (state, action) => {
            if (action.payload.length > 8) return;
            state.username = action.payload;
        }
    }
});

export const {
    changeName
} = playerSlice.actions;
export default playerSlice.reducer;