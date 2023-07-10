import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCartItem } from "../api/cartApi"


export const getCartItem = createAsyncThunk('getItem/getCartItem', async () => {
    const { data } = await fetchCartItem()
    return data
})