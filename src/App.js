import { Route, Routes } from 'react-router';
import ProductListPage from './components/ProductListPage';
import Header from './components/headers/Header';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/headers/Login';
import Signup from './components/headers/signup';
import ProductDetail from './components/productDetail/productDetail';
import Cart from './components/headers/cart';
import Checkout from './components/checkout/checkout';
import Protected from './protectedRoute/protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItem } from './store/actions/cartItemActions';
import PageNoteFound from './404 PageNotFound/PageNoteFound';
import OrderSuccess from './components/order/orderSuccess';

function App() {
  const dispatch = useDispatch()
  let { cartItem } = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(getCartItem())
  }, [dispatch]);
  return (
    <BrowserRouter  >
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout/order' element={<OrderSuccess />}></Route>
        <Route path='/cart' element={
          // <Protected>
          //   <Cart />
          // </Protected>
          <Cart cartItem={cartItem} />
        } />
        <Route path='/checkout' element={
          <Protected>
            <Checkout cartItem={cartItem} />
          </Protected>
        } />
        <Route path='*' element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
