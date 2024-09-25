import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, categoryReducer, dataReducer, modalReducer } from './slices';

export const store = () => {
  return configureStore({
    reducer: {
        modals: modalReducer,
        siteData: dataReducer,
        categories: categoryReducer,
        cart: cartReducer,
    }
  })
}