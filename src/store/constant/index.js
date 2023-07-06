
// const URL = "https://dummyjson.com";
const URL = `${process.env.REACT_APP_API_BASEURL}`

const productApi = {
    getProducts: `${URL}`,
};
export const path = {
    root: "/",
    ...productApi
}