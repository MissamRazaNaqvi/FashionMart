import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router'

import axios from 'axios'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
    // const data = [
    //     {
    //         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    //         caption: "San Francisco"
    //     },
    //     {
    //         image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    //         caption: "Scotland"
    //     },
    //     {
    //         image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    //         caption: "Darjeeling"
    //     },
    //     {
    //         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    //         caption: "San Francisco"
    //     },
    //     {
    //         image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //         caption: "Scotland"
    //     },
    //     {
    //         image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //         caption: "Darjeeling"
    //     },
    //     {
    //         image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //         caption: "San Francisco"
    //     },
    //     {
    //         image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //         caption: "Scotland"
    //     },
    //     {
    //         image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //         caption: "Darjeeling"
    //     }
    // ];

    // const captionStyle = {
    //     fontSize: '2em',
    //     fontWeight: 'bold',
    // }
    // const slideNumberStyle = {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    // }
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const [detail, setProduct] = useState([]);
    async function getProductByid() {
        let { data } = await axios.get(`${process.env.REACT_APP_API_BASEURL}/products/${id}`)
        setProduct(data)
    }
    async function addToCart() {
        await axios.post(`${process.env.REACT_APP_API_BASEURL}/cartItem`, {
            "id": detail.id,
            "price": detail.price,
            "rating": detail.rating,
            "title": detail.title,
            "description": detail.description,
            "discountPercentage": detail.discountPercentage,
            "stock": detail.stock,
            "brand": detail.brand,
            "category": detail.category,
            "thumbnail": detail.thumbnail,
            "images": [detail.images]
        })
    }
    // console.log(detail.images)
    useEffect(() => {
        if (id) {
            getProductByid()
        }
    }, []);
    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav> */}

                {/* Image gallery */}

                {/* <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                /> */}
                <div >
                </div>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={detail.images && detail.images[0]}
                            alt={product.title}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={detail.images && detail.images[1]}
                                alt={product.images[1].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={detail.images && detail.images[2]}
                                alt={product.images[2].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={detail.images && detail.images[3]}
                            alt={product.images[3].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {product.colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        color.selectedClass,
                                                        active && checked ? 'ring ring-offset-1' : '',
                                                        !active && checked ? 'ring-2' : '',
                                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label as="span" className="sr-only">
                                                    {color.name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        color.class,
                                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                    )}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Size guide
                                    </a>
                                </div>

                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {product.sizes.map((size) => (
                                            <RadioGroup.Option
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={({ active }) =>
                                                    classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                        {size.inStock ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            <button onClick={() => { addToCart() }}
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to Cart
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}