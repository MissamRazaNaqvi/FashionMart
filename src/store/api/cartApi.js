import axios from "axios"
import { path } from "../constant"

export const fetchCartItem = () => {
    return axios.get(path.cartItemPath)
}
export const deleteCartItem = (id) => {
    return axios.delete(`${path.deleteCartItem}/${id}`)
}