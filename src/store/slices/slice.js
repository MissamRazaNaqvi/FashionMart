import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../actions/productAction";

const initialState = {
    product: [],
    sorteditem: [],
    error: null,
    loading: false
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handleSortChange: (state, action) => {
            let { sorting } = action.payload
            if (sorting === 'LowToHigh') {
                state.sorteditem = [...state.product].sort((a, b) => (a.price - b.price))
            }
            else if (sorting === 'HighToLow') {
                state.sorteditem = [...state.product].sort((a, b) => (b.price - a.price))
            }
            // else if (sorting === 'a-z') {
            //     state.sorteditem = [...state.product].sort((a, b) => a.title.localeCompare(b.title))
            // }
            // else if (sorting === 'z-a') {
            //     state.sorteditem = [...state.product].sort((a, b) => b.title.localeCompare(a.title))

            // }
            else if (sorting === 'sort') {
                state.sorteditem = state.products
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
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})
export default productSlice.reducer
export const { handleSortChange } = productSlice.actions