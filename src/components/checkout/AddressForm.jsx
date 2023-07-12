import axios from "axios"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { handleShowForm } from "../../store/slices/orderSlice"

export default function AddressForm() {
    const { register, handleSubmit } = useForm()
    const { showForm } = useSelector(state => state.addressSlice)
    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        await axios.post('http://localhost:8080/address', data)
        dispatch(handleShowForm(!showForm))
    }
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                {...register('name', { required: true })}
                                placeholder='Enter your full name'
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                {...register('email', { required: true })}
                                type="email"
                                placeholder='Enter your email'
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div><br />

                    <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Country
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                {...register('country', { required: true })}
                                // onChange={(e) => { setCountry(e.target.value) }}
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>INDIA</option>
                                <option>UAE</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            State / Province
                        </label>
                        <div className="mt-2">
                            <select
                                id="state"
                                name="state"
                                {...register('state', { required: true })}
                                // onChange={(e) => { setCountry(e.target.value) }}
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                {/* {
                                                        states.map(() => { })
                                                    } */}
                                <option>Gujarat</option>
                                <option>Maharashtra</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            City
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="city"
                                {...register('city', { required: true })}
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            ZIP / Postal code
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="postal-code"
                                {...register('zipcode', { required: true })}
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Street address
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="street-address"
                                {...register('street', { required: true })}
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone No.
                        </label>
                        <div className="mt-2">
                            <input
                                id="Number"
                                name="phone"
                                {...register('phone', { required: true })}
                                type="number"
                                placeholder='Enter your Number'
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div><br />
                </div>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                > Add Address
                </button>
            </form>
        </div>
    )
}
