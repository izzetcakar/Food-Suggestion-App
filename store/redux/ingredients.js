import { createSlice } from '@reduxjs/toolkit';

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ids: [],
        names: []
    },
    reducers: {
        addIngredient: (state, action) => {
            state.ids.push(action.payload.id);
            state.names.push(action.payload.name);
        },
        removeIngredient: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
            state.names.splice(state.names.indexOf(action.payload.name), 1);
        }
    }
});
export const addIngredient = ingredientsSlice.actions.addIngredient;
export const removeIngredient = ingredientsSlice.actions.removeIngredient;
export default ingredientsSlice.reducer;