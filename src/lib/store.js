import { configureStore } from '@reduxjs/toolkit';
import { modalReducer, navReducer } from './slices';

export const store = () => {
  return configureStore({
    reducer: {
        modals: modalReducer,
        navMenu: navReducer
    }
  })
}