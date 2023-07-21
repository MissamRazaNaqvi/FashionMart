import axios from "axios"
import { path } from "../constant"

export const fetchCartItem = () => {
    return axios.get(path.cartItemPath)
}
export const deleteCartItem = (_id) => {
    return axios.post(`${path.deleteCartItem}`, { _id })
}