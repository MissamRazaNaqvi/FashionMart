import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/slice'
const store = configureStore({
    reducer: {
        productReducer: productSlice,
    },
});

export default store;