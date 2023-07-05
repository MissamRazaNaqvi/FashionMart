import axios from "axios"
import { path } from "../constant"

export const fetProducts = () => {
    return axios.get(path.getProducts)
}