import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteCartItem, fetchCartItem } from "../api/cartApi"


export const getCartItem = createAsyncThunk('getItem/getCartItem', async () => {
    const { data } = await fetchCartItem()
    return data
})
export const deleteProduct = createAsyncThunk('delete/deleteProductFromCart', async (_id) => {
    await deleteCartItem(_id)
})