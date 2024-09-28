import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './charactersSlice'; 
import locationsReducer from './locationsSlice';
import episodesReducer from './episodesSlice';


export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
  },
});
