import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetProducts, fetchCategory } from "../api/productApi";

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
