import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAddress, setAddress } from "../api/orderApi"

export const addAddress = createAsyncThunk('address/setAddress', async () => {
    const { data } = await setAddress()
    return data
})
export const getAddressList = createAsyncThunk('address/getAddress', async () => {
    const { data } = await fetchAddress()
    return data
})
