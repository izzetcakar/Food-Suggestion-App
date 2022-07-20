import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
    name: 'availableMeals',
    initialState: {
        ids: [],
    },
    reducers: {
        addMeal: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeMeal: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});
export const addMeal = mealSlice.actions.addMeal;
export const removeMeal = mealSlice.actions.removeMeal;
export default mealSlice.reducer;