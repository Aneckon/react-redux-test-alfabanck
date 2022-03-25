import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './card/reducer';
import favoriteReducer from './favorite/reducer';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    favorite: favoriteReducer
  },
});
