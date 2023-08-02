import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { deleteProduct, getCartItem } from '../../store/actions/cartItemActions';
import { useEffect } from 'react';

export default function Cart() {
    let { cartItem } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    let subtotal = 0
    cartItem.map((item) => {
        subtotal = subtotal + item.price
    })
    function deleteCartItem(_id) {
        dispatch(deleteProduct(_id))
        dispatch(getCartItem())
    }
    useEffect(() => {
        dispatch(getCartItem())
    }, [dispatch]);
    return (
        <>
            {!cartItem.length && <Navigate to='/' />}
            <div className="">
                <div className="flex lg:px-60 h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="mt-8">
                            <div className="flow-root">
                                <ul className="-my-6 divide-y divide-gray-200">
                                    {cartItem.map((product) => (
                                        <li key={product.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href={product.href}>{product.title}</a>
                                                        </h3>
                                                        <p className="ml-4">${product.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty : {product.qty}</p>
                                                    <div className="flex">
                                                        <button onClick={() => { deleteCartItem(product._id) }}
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${subtotal}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <Link
                                to="/checkout"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Checkout
                            </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or
                                <Link to='/'>
                                    <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}