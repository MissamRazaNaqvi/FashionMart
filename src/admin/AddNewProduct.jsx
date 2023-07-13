import axios from 'axios';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import style from '../assets/css/admin.module.css'

export default function AddNewProduct({ productId }) {
    console.log(productId)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    // const { id } = useParams()
    // console.log(id)
    const [product, setProduct] = useState([{}]);
    // async function handlefile(event) {
    //     let formdata = new FormData();
    //     let filedata = event.target.files[0];
    //     formdata = { ...formdata, 'file': filedata }
    //     console.log(formdata);
    //     await axios.post('http://localhost:9000/user/addimage', formdata, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    // }
    async function onSubmit(data) {
        console.log(data);
        // let imagename = image[0].name;
        // console.log(id);
        // if (id>0) {
        //     const response = await axios.put(`${process.env.REACT_APP_BASEURL}/update/${id}`, { productName, imagename, brand, price, Quantity }).then(navigate('/admin'));
        // } else {
        //     const response = await axios.post(`${process.env.REACT_APP_BASEURL}/addproduct`, { productName, imagename, brand, price, Quantity }).then(navigate('/admin'));
        // }
    }
    // async function updateProduct(id) {
    //     let { data } = await axios.get(`${process.env.REACT_APP_BASEURL}/${id}`)
    //     setProduct(data)
    // }
    // useEffect(() => {
    //     if (id) {
    //         updateProduct(id)
    //     }
    // }, []);
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <form className={style.adminform} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstname">Product Name :</label>
                        <input placeholder="firstname" defaultValue={product[0].name} type='text' name='productName' {...register('productName', { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="lastname">Product Detail:</label>
                        {/* <input placeholder="" type='file' name='image' {...register('image', { required: true, })} onChange={(event) => handlefile(event)} ></input> */}
                    </div>
                    <div>
                        <label htmlFor="name">Brand:</label>
                        <input placeholder="enter brand name " defaultValue={product[0].brand} name='brand'{...register('brand', { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="name">Price:</label>
                        <input placeholder="enter price " name='price' defaultValue={product[0].price} {...register('price', { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="name">Quantity:</label>
                        <input placeholder="enter Quantity" name='Quantity' defaultValue={product[0].qty} {...register('Quantity', { required: true })}></input>
                    </div>
                    <div>
                        <input type="submit" ></input>
                    </div>
                </form>
            </div>
        </div>
    )
}