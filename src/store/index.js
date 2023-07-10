import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/slice'
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        productReducer: productSlice,
        user: userSlice,
        cart: cartSlice
    },
});

export default store;