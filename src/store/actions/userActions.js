// import { createAsyncThunk } from "@reduxjs/toolkit"
// import { getLogin } from "../api/userApi"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { createNewUser, fetchVerify, getUser } from "../api/userApi"

// export const checkLogin = createAsyncThunk('login/checklogin', async (record) => {
//     let { data } = await getLogin(record)
//     return data
// })
export const createUser = createAsyncThunk('create/createUser', async (data) => {
    await createNewUser(data)
})
export const getUserData = createAsyncThunk('user/getUser', async () => {
    let { data } = await getUser()
    return data
})
export const getVerify = createAsyncThunk('user/getVerify', async () => {
    let { data } = await fetchVerify()
    return data
})
// export const logout = (state, action) => {
//     // state.isLogin = action.payload
// }