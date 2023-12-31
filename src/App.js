import { Route, Routes, useNavigate } from 'react-router';
import ProductListPage from './components/ProductListPage';
import Header from './components/headers/Header';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/headers/Login';
import Signup from './components/headers/signup';
import ProductDetail from './components/productDetail/productDetail';
import Cart from './components/headers/cart';
import Checkout from './components/checkout/checkout';
import Protected from './protectedRoute/protected';
import PageNoteFound from './404 PageNotFound/PageNoteFound';
import OrderSuccess from './components/order/orderSuccess';
import Profile from './components/headers/Profile';
import ForgotPassword from './components/headers/forgotPassword';
import Admin from './admin/admin';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { handleLogin, handleUserId } from './store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVerify } from './store/actions/userActions';

axios.defaults.withCredentials = true

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate
  const { isLogin } = useSelector(state => state.user)
  function checkUser() {
    if (isLogin) {
      navigate('/')
    } else {
      dispatch(getVerify())
    }
  }
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <BrowserRouter  >
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout/order' element={<OrderSuccess />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart' element={
          // <Protected>
          //   <Cart />
          // </Protected>
          <Cart />
        } />
        <Route path='/checkout' element={
          <Protected>
            <Checkout />
          </Protected>
        } />
        <Route path='*' element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
