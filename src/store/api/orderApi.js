import axios from "axios"
import { path } from "../constant"

export const setAddress = () => {
    return axios.post(path.address)
}
export const fetchAddress = () => {
    return axios.get(path.address)
}