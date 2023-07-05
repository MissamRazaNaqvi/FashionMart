import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../actions/productAction";

const initialState = {
    product: [],
    error: null,
    loading: false
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export default productSlice.reducer