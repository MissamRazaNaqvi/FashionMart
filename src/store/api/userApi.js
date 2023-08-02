import { path } from "../constant"
import axios from "axios"

// export const getLogin = (record) => {
//     return axios.post(path.isLogin, { record })
// }

export const createNewUser = (data) => {
    return axios.post(path.createUser, { email: data.email, password: data.password })
}
export const getUser = () => {
    return axios.get(path.createUser)
}
export const fetchVerify = () => {
    return axios.get(path.verify)
}