import { Route, RouterProvider, Routes } from 'react-router';
import ProductListPage from './components/ProductListPage';
import Header from './components/headers/Header';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Login from './components/headers/Login';
import Signup from './components/headers/signup';
import ProductDetail from './components/productDetail/productDetail';
import Cart from './components/headers/cart';
import Checkout from './components/checkout/checkout';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (<ProductListPage />),
//   },
//   {
//     path: "/login",
//     element: (<Login />),
//   },
//   {
//     path: "/signup",
//     element: (<Signup />)
//   }
// ]);
function App() {
  return (
    <BrowserRouter  >
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productDetail' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
