import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAddress, setAddress } from "../api/addressApi"

export const addAddress = createAsyncThunk('address/setAddress', async (newData) => {
    const { data } = await setAddress(newData)
    return data
})
export const getAddressList = createAsyncThunk('address/getAddress', async (userId) => {
    const { data } = await fetchAddress(userId)
    return data
})
