import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewUser, fetProducts, fetchCategory, getUser } from "../api/productApi";

export const getProducts = createAsyncThunk("product/getProduct",
    async () => {
        const { data } = await fetProducts();
        return data
    }
)
export const getCategory = createAsyncThunk('category/getCategory', async () => {
    const { data } = await fetchCategory()
    return data
})
export const createUser = createAsyncThunk('create/createUser', async (data) => {
    await createNewUser(data)
})
export const getUserData = createAsyncThunk('user/getUser', async () => {
    let { data } = await getUser()
    return data
})