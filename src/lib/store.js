import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer, dataReducer, modalReducer } from './slices';

export const store = () => {
  return configureStore({
    reducer: {
        modals: modalReducer,
        siteData: dataReducer,
        categories: categoryReducer
    }
  })
}