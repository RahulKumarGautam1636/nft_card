import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, categoryReducer, dataReducer, loaderReducer, loginReducer, modalReducer, userReducer, wishlistReducer } from './slices';

export const store = () => {
  return configureStore({
    reducer: {
        isLoggedIn: loginReducer,
        user: userReducer,
        modals: modalReducer,
        siteData: dataReducer,
        categories: categoryReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        isLoading: loaderReducer,
    }
  })
}