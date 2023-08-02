import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
function Protected({ children }) {
    let { isLogin } = useSelector((state) => state.user)
    // console.log(isLogin);
    useEffect(() => {

    }, [isLogin])

    if (!isLogin) {
        return <Navigate to='/login' />
    }
    else {
        return children
    }
    // async function authUser() {
    //     console.log(token);
    //     let { data } = await axios.post(`${process.env.REACT_APP_BASEURL}/verify`, { token: token })
    //     console.log("status", data.success);
    //     if (data.success) {
    //         setisloggedin(true)
    //         navigate('/cart');
    //     }
    //     else {
    //         setisloggedin(false)
    //     }
    // }
    // if (isloggedin) {
    //     return children
    // }
    // else {
    //     return <Navigate replace to='/login' />
    // }




}
export default Protected