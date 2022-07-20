import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from './ingredients';
import mealReducer from './availableMeals';
export const store = configureStore({
    reducer: {
        chosenIngredients: ingredientsReducer,
        availableMeals: mealReducer
    }
});