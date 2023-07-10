import { createSlice } from "@reduxjs/toolkit"
import { getUserData } from "../actions/productAction";

const initialState = {
    user: [],
    isLogin: false,
    loading: false,
    error: null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleLogin: (state, action) => {
            if (action.payload) {
                state.isLogin = action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state, action) => {
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
    }
})
export default userSlice.reducer
export const { handleLogin } = userSlice.actions