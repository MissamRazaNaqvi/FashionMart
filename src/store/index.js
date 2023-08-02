import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/slice'
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import addressSlice from "./slices/addressSlice";

const store = configureStore({
    reducer: {
        productReducer: productSlice,
        addressSlice: addressSlice,
        user: userSlice,
        cart: cartSlice,
    },
});

export default store;