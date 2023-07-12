import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getCartItem } from "../actions/cartItemActions";

const initialState = {
    cartItem: [],
    error: null,
    loading: false
}
const cartSlice = createSlice({
    name: "cartItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCartItem.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCartItem.fulfilled, (state, action) => {
                state.cartItem = action.payload;
                state.loading = false;
            })
            .addCase(getCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteProduct.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})
export default cartSlice.reducer