import {useEffect} from "react";
import {editProductData} from "../features/product/productSlice";
import {editUserdata} from "../features/userData/userDataSlice";
import {Link} from "react-router-dom";
import {selectAllProductData,editAllProductData} from "../features/product/allProductSlice"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import AllProducts from "./Components/allProducts"


export default function Home(){
    const data = useSelector(selectAllProductData)
    let dispatch = useDispatch()

    let itemsToRender
    if(data){

        if (data) {
            itemsToRender = data.map(item => {
                return <AllProducts
                    data={item}
                    key={item.id}


                >

                </AllProducts>

            });
        }
    }

    function ok(){
        console.log(data)
    }
    useEffect(() => {

        axios.get('http://narek.test/api/getallproducts')
            .then((res) => {
                // console.log(res.data.data)
                dispatch(editAllProductData(res.data.data))
            })

    }, []);

    return(
        <div className={'container row'}>
            <h1>Home Page</h1>
            <div className={'d-flex '}>
                <Link to='/login' className={'m-5'}>
                    Login
                </Link>
                <Link to='/signup' className={'m-5'}>
                    SignUp
                </Link>
            </div>

            {itemsToRender}
        </div>
    )
}