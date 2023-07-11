import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/slice'
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        productReducer: productSlice,
        addressSlice: orderSlice,
        user: userSlice,
        cart: cartSlice,
    },
});

export default store;