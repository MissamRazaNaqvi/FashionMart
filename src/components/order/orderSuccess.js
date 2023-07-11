import { Link } from 'react-router-dom'
import orderGif from '../../assets/images/orderplace.gif'

export default function OrderSuccess() {
    return (
        <div>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your Order has been Receive</h1>
                    <img src={orderGif} alt='order place' />
                    <h3 className="mt-6  text-gray-600">Thanks for your purchase!</h3>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        {/* <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a> */}
                    </div>
                </div>
            </main>
        </div>
    )
}
