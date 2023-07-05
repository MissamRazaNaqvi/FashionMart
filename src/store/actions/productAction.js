import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetProducts } from "../api/productApi";

export const getProducts = createAsyncThunk("product/getProduct",
    async () => {
        const { data } = await fetProducts();
        return data
    }
)