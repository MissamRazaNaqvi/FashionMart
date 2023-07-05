const URL = "https://dummyjson.com";

const productApi = {
    getProducts: `${URL}/products`
};
export const path = {
    root: "/",
    ...productApi
}