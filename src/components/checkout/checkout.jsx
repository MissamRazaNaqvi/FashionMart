import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { deleteProduct, getCartItem } from '../../store/actions/cartItemActions'
import { useForm } from 'react-hook-form'
import AddressForm from './AddressForm'
import { handleShowForm } from '../../store/slices/orderSlice'
import { getAddressList } from '../../store/actions/orderActions'

// const adddress = [
//     {
//         name: 'Leslie Alexander',
//         email: 'Royal Nawab Society juhapura ahm pincode 380055',
//         role: '9876543218',
//         imageUrl:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: 'Delhi',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Michael Foster',
//         email: 'al-burj society makarba ahm pincode 380055',
//         role: '987797895',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: 'ahemdabad',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },

// ]
export default function Checkout() {
    let subtotal = 0
    // let regions = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"]
    // let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    //     "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
    //     "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    //     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    // ]
    let paymentMethod = ['UPI', 'COD', 'CREDIT/DEBIT CARD']
    const [selectedCountry, setCountry] = useState();
    // console.log(selectedCountry)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [handleAddress, setHandleAddress] = useState();
    const [orderMethod, setOrderMethod] = useState();
    const { addressList, showForm } = useSelector(state => state.addressSlice)
    let { cartItem } = useSelector(state => state.cart)
    cartItem.map((item) => {
        return subtotal += item.price
    })
    const order = async (data) => {
        console.log('function call', data);
        let deliverAddress = addressList.filter(delivery => delivery.id === handleAddress)
        navigate('/checkout/order')
        await axios.post('http://localhost:8080/order', { products: cartItem, paymentMethos: data.method, deliverAddress: deliverAddress })
    }
    function deleteCartItem(id) {
        dispatch(deleteProduct(id))
        dispatch(getCartItem())
    }
    useEffect(() => {
        dispatch(getAddressList())
    }, [showForm]);
    return (
        <>{!cartItem.length && <Navigate to='/' />}
            <div className="space-y-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                    <div className='lg:col-span-3'>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        <button onClick={() => { dispatch(handleShowForm(!showForm)) }}
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 mt-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add Address
                        </button>
                        <div className="space-y-12">
                            {showForm ? <AddressForm /> : ""}
                            <div className="border-b border-gray-900/10 pb-12">
                                <form onSubmit={handleSubmit(order)}>
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <div className="mt-10 space-y-10">
                                            <ul className="divide-y divide-gray-100">
                                                {addressList.map((person) => (
                                                    <li key={person.id} className="flex justify-between gap-x-6 py-5">
                                                        <div className="flex gap-x-4 items-center">
                                                            <input type='radio' name='add' value={person} {...register('address', { required: true })} onClick={() => { setHandleAddress(person.id) }} />
                                                            <div className="min-w-0 flex-auto">
                                                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                                <p className="text-sm font-semibold leading-6 text-gray-500">{person.street}</p>
                                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                                                            <p className="text-sm leading-6 text-gray-900">Phone No: +91 {person.phone}</p>
                                                            {person.lastSeen ? (
                                                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                                                    <time dateTime={person.lastSeenDateTime}>{person.state}</time>
                                                                </p>
                                                            ) : (
                                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                                    </div>
                                                                    <p className="text-xs leading-5 text-gray-500">{person.state}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <fieldset>
                                                <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Method</legend>
                                                <p className="mt-1 text-sm leading-6 text-gray-600">choose one</p>
                                                <div className="mt-6 space-y-6">
                                                    {paymentMethod.map((method, index) => {
                                                        return (
                                                            <div key={index} className="flex items-center gap-x-3">
                                                                <input
                                                                    id="payment"
                                                                    name="payment"
                                                                    type="radio"
                                                                    value={method}
                                                                    {...register('method', { required: true })}
                                                                    onClick={() => { setOrderMethod(method) }}
                                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                    required
                                                                />
                                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    {method}
                                                                </label>
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                            </fieldset>
                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    // onClick={() => { order() }}
                                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Order Place
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                        <div className="flex h-full flex-col  bg-white shadow-xl">
                            <div className="flex-0s px-4 py-2 sm:px-6">
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul className="-my-6 divide-y divide-gray-200">
                                            {cartItem && cartItem.map((product) => (
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
                                                                <button onClick={() => { deleteCartItem(product.id) }}
                                                                    type="button"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
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
                </div>
            </div>
        </>
    )
}
