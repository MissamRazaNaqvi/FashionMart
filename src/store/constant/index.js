
// const URL = "https://dummyjson.com";
const URL = `${process.env.REACT_APP_API_BASEURL}`

const productApi = {
    getProducts: `${URL}/products`,
    getCategory: `${URL}/categories`,
    createUser: `${URL}/user`
};
export const path = {
    root: "/",
    ...productApi
}