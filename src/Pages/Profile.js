import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {selectUserdata,editUserdata, chnageUserdataName} from "../features/userData/userDataSlice"
import {selectProductData,editProductData,addProductData,deleteProductData} from "../features/product/productSlice"
import {editTest, selectTest} from "../features/test/testSlice";
import AddProduct from './Components/addProduct'
import {useState} from "react";
import MyProducts from './Components/myProducts'

export default function Profile() {
    let dt = useSelector(selectProductData)
    let itemsToRender
    if(dt){

        if (dt) {
            itemsToRender = dt.map(item => {
                return <MyProducts
                    data={item}
                    key={item.id}
                    deletes={deletes}

                >

                </MyProducts>

            });
        }
    }




    const [open, setOpen] = useState('false')
    let token = localStorage.getItem('token')
    let bol = true


    function changeBol(){
        setOpen(!open)
    }

    function deletes(id){
        console.log(id)
        let deldat = dt.filter((i) =>{
            return i.id != id
        })
        dispatch(deleteProductData(deldat))

        authAxios.delete('/deletemyproducts' + '/' + id)
            .then((res) => {
                 console.log(res.data)
                // dispatch(editUserdata(res.data.data))

            })
    }

    function sendData(data){
        dispatch(addProductData(data))
        authAxios.post('/addproduct',data)
            .then((res) => {
                // console.log(res.data)
                // dispatch(editUserdata(res.data.data))
                setOpen(!open)
            })
    }


    const authAxios = axios.create({
        baseURL: 'http://narek.test/api',
        headers: {
            Authorization: `Bearer ` + token,

        }
    })
    const dispatch = useDispatch()

    const changedData = {
        name:'',
        email:''
    }
    const data = useSelector(selectUserdata)

    function change(){
        dispatch(chnageUserdataName(changedData))
       // console.log(changedData)
        authAxios.post('/changeuserdata',changedData)
            .then((res) => {
               // console.log(res.data)
               // dispatch(editUserdata(res.data.data))
            })
    }

    useEffect(() => {



      //  dispatch(editProductData(arr))

        authAxios.get('/getmyproducts')
            .then((res) => {
                // console.log(res.data.data)
                dispatch(editProductData(res.data.data))
            })

        authAxios.get('/getuserdata')
            .then((res) => {
               // console.log(res.data.data)
                dispatch(editUserdata(res.data.data))
            })

        authAxios.get('/getmyproducts')
            .then((res) => {
                // console.log(res.data.data)
              //  dispatch(editUserdata(res.data.data))
            })



    }, []);

    return(
        <div className={'container'}>

            <h1>Profile</h1>
            <nav className="navbar navbar-light bg-light">
                <h1 className="navbar-brand">{data.name}</h1>
                <h1 className="navbar-brand">{data.email}</h1>
            </nav>
            <div>
                <h5>Change Data</h5>
                <input type="text"  placeholder={'name'} onChange={(e) =>{
                    changedData.name = e.target.value
                }}/>
                <input type="text"  placeholder={'email'} onChange={(e) =>{
                    changedData.email = e.target.value
                }}/>

            </div>
            <button onClick={change}>Change Name</button>
            <div>
                <button className={'btn btn-primary'} onClick={changeBol}>Click To Add Products</button>
            </div>
            <div style={{display: open ? 'none' : 'block' }}>
                <AddProduct sendData={sendData}>

                </AddProduct>
            </div>
            <div>
                {

                    itemsToRender
                }



            </div>
        </div>
    )
}