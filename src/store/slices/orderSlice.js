import { createSlice } from "@reduxjs/toolkit"
import { addAddress, getAddressList } from "../actions/orderActions"

const initialState = {
    address: [],
    addressList: [],
    showForm: false,
    error: null,
    loading: false
}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        handleShowForm: (state, action) => {
            state.showForm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addAddress.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                state.address = action.payload;
                state.loading = false;
            })
            .addCase(addAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(getAddressList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAddressList.fulfilled, (state, action) => {
                state.addressList = action.payload;
                state.loading = false;
            })
            .addCase(getAddressList.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})
export default orderSlice.reducer
export const { handleShowForm } = orderSlice.actions