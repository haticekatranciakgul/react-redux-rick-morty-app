import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './charactersSlice'; // Doğru reducer'ı import ediyoruz

export const store = configureStore({
  reducer: {
    characters: charactersReducer, // charactersReducer'ı buraya ekliyoruz
  },
});
