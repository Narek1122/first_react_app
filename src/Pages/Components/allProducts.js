export default function AllProducts(props){

    return(
        <div className={'col'}>
            <h1>{props.data.product_name}</h1>
            <h1>{props.data.price}</h1>

        </div>

    )
}