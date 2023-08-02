import { createSlice } from "@reduxjs/toolkit"
import { getUserData, getVerify } from "../actions/userActions"

const initialState = {
    user: [],
    isLogin: false,
    userId: {},
    loading: false,
    error: null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleLogin: (state, action) => {
            state.isLogin = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getVerify.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getVerify.fulfilled, (state, action) => {
                state.loading = false;
                state.isLogin = action.payload;
            })
            .addCase(getVerify.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


    }
})
export default userSlice.reducer
export const { handleLogin, handleUserId } = userSlice.actions