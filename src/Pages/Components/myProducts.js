export default function MyProducts(props){

    return(
        <div className={'row'}>
            <div className={'d-flex '}>
                <h1>{props.data.product_name}</h1>
                <h1>{props.data.price}</h1>
                <button className={'btn btn-warning'} onClick={(e) => props.deletes(props.data.id)}>Delete</button>
            </div>
        </div>

    )
}