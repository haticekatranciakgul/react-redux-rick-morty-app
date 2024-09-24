import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './charactersSlice'; // Doğru reducer'ı import ediyoruz
// import locationsReducer from './locationsSlice';
// import episodesReducer from './episodesReucer';


export const store = configureStore({
  reducer: {
    characters: charactersReducer, // charactersReducer'ı buraya ekliyoruz
    // locations: locationsReducer,
    // episodes: episodesReducer,
  },
});
