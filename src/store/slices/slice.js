import { createSlice } from "@reduxjs/toolkit"
import { getCategory, getProducts } from "../actions/productAction";

const initialState = {
    product: [],
    sorteditem: [],
    categories: [],
    error: null,
    loading: false
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handleSortChange: (state, action) => {
            let sorting = action.payload
            if (sorting === 'HighToLow') {
                state.sorteditem = [...state.product].sort((a, b) => (b.price - a.price))
            }
            else if (sorting === 'LowToHigh') {
                state.sorteditem = [...state.product].sort((a, b) => (a.price - b.price))
            }
            else if (sorting === 'BestRating') {
                state.sorteditem = [...state.product].sort((a, b) => (b.rating - a.rating))
            }
            else if (sorting === 'sort') {
                state.sorteditem = state.product
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
                state.sorteditem = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCategory.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})
export default productSlice.reducer
export const { handleSortChange } = productSlice.actions