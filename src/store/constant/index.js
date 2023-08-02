const productApi = {
    deleteCartItem: `${process.env.REACT_APP_API_BASEURL}/deleteCartItem`,
    addressList: `${process.env.REACT_APP_API_BASEURL}/addressList`,
    getCategory: `${process.env.REACT_APP_API_BASEURL}/categories`,
    cartItemPath: `${process.env.REACT_APP_API_BASEURL}/cartItem`,
    getProducts: `${process.env.REACT_APP_API_BASEURL}/products`,
    address: `${process.env.REACT_APP_API_BASEURL}/address`,
    createUser: `${process.env.REACT_APP_API_BASEURL}/user`,
    isLogin: `${process.env.REACT_APP_API_BASEURL}/login`,
    verify: `${process.env.REACT_APP_API_BASEURL}/verify`
};
export const path = {
    root: "/",
    ...productApi
}