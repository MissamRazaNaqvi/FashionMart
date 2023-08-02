import axios from "axios"
import { path } from "../constant"


export const setAddress = (newData) => {
    return axios.post(path.address, newData)
}
export const fetchAddress = (userId) => {
    return axios.get(path.addressList, { userId })
}