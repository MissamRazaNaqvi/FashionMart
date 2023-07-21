import axios from "axios"
import { path } from "../constant"

export const fetProducts = () => {
    return axios.get(path.getProducts)
}
export const fetchCategory = () => {
    return axios.get(path.getCategory)
}
