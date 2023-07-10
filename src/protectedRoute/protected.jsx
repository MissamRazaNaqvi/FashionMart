import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
function Protected({ children }) {
    let { isLogin } = useSelector((state) => state.user)
    if (!isLogin) {
        return <Navigate to='/login' />
    }
    else {
        return children
    }
}
export default Protected