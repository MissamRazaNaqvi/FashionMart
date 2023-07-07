import axios from "axios"
import { path } from "../constant"

export const fetProducts = () => {
    return axios.get(path.getProducts)
}
export const fetchCategory = () => {
    return axios.get(path.getCategory)
}
export const createNewUser = (data) => {
    return axios.post(path.createUser, { email: data.email, password: data.password, confirmPassword: data.confirmPassword })
}
export const getUser = () => {
    return axios.get(path.createUser)
}