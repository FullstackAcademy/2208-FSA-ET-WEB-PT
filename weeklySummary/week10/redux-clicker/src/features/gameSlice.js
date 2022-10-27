import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0,
    farms: 0,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addPoint: (state, action) => {
            state.points += 1;
        },
        // array.map( item => item + 1);
        subtractPoint: (state) => {
            state.points -= 1;
        },
        resetPoints: (state) => {
            state.points = 0;
        },
        buyFarm: (state) => {
            if (state.points > 5) {
                state.points -= 5;
                state.farms += 1;
            }
        }
    }
});

export const {
    addPoint,
    subtractPoint,
    resetPoints,
    buyFarm
} = gameSlice.actions;

export default gameSlice.reducer

// default export { reducerObj }
// export {
//     {
//         addPoint,  => { payload, type: 'game/addPoint' }
//         subtractPoint,
//         resetPoints,
//         buyFarm
//     },
//     gameSlice
// }


// dispatch({ payload, type: 'game/addPoint' })