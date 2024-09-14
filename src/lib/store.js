import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer, modalReducer, navReducer } from './slices';

export const store = () => {
  return configureStore({
    reducer: {
        modals: modalReducer,
        navMenu: navReducer,
        categories: categoryReducer
    }
  })
}