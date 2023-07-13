import { useEffect, useState } from 'react'
import style from '../assets/css/admin.module.css'
// import useIsAdmin from './useIsAdmin';
import { useDispatch, useSelector } from 'react-redux';
import AddNewProduct from './AddNewProduct';
import { getProducts } from '../store/actions/productAction';

export default function Admin() {
    let { sorteditem } = useSelector((state) => state.productReducer)
    const [addproduct, setAddproduct] = useState(false);
    const [productId, setProductId] = useState(0);
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const checkAdmin = useIsAdmin()
    // async function isAdmin() {
    //     const admin = await checkAdmin();
    //     console.log('frontend', admin);
    //     if (!admin) {
    //         navigate('/login')
    //     }
    // }
    async function deleteproduct(id) {
        // await axios.post(`${process.env.REACT_APP_BASEURL}/deleteProduct`, { id });
    }

    useEffect(() => {
        // isAdmin()
        dispatch(getProducts())
    }, []);
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.addProductStyle}>
                    <button className={style.addBtn} onClick={() => { setAddproduct(!addproduct) }}>ADD NEW PRODUCT</button>
                    {addproduct ? <AddNewProduct productId={productId} /> : ""}
                </div>
                <div className={style.app}>
                    <table className={style.table}>
                        <tr className={style.tableHeadId}>
                            <th className={style.tableHeadId}>Image</th>
                            <th className={style.tableHeadId}>Product Id</th>
                            <th className={style.tableHeadId}>Product Name</th>
                            <th className={style.tableHeadId}>Brand</th>
                            <th className={style.tableHeadId}>Price</th>
                            <th className={style.tableHeadId}>quantity</th>
                            <th className={style.tableHeadId}>update</th>
                            <th className={style.tableHeadId}>Remove</th>
                        </tr>
                        {sorteditem.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td><img src={item.thumbnail} className={style.prodImg} alt="Avatar" /></td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td><button className={style.editBtn} onClick={() => { setProductId(item.id) }}>EDIT</button></td>
                                    <td><button className={style.deleteBtn} onClick={() => deleteproduct(item.id)}>DELETE</button></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}
