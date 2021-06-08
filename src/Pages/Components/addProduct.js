
export default function AddProduct(props){
    let dat = {
        product_name:'',
        price:''
    }
    return(
        <div>
            <h1>Add Your Product</h1>
            <div>
                <div>
                    <label htmlFor="">Product Name</label>
                    <input type="text" onChange={(e) =>{
                        dat.product_name = e.target.value
                    }}/>
                </div>
                <div>
                    <label htmlFor="">Product Price</label>
                    <input type="text" onChange={(e) =>{
                        dat.price = e.target.value
                    }}/>
                </div>
                <button onClick={() => props.sendData(dat)}>Add Product</button>
            </div>
        </div>
    )
}