import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/slice'
import userSlice from "./slices/userSlice";
const store = configureStore({
    reducer: {
        productReducer: productSlice,
        user: userSlice
    },
});

export default store;