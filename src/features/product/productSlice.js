export function productReducer(state = {},action){

    switch(action.type){
        case 'product-data':
            return{

                ...state,
                data:action.payload
            }
            break
        case 'add-product-data':

            return{

                data:[action.payload,...state.data]

            }
            break
        case 'delete-product-data':

            return{

                data:[...action.payload]

            }
            break

    }


    return state

}

export function selectProductData(state){
    return state.product.data
}
export function editProductData(data){
    return{
        type:"product-data",
        payload:data
    };
}

export function addProductData(data){
    return{
        type:"add-product-data",
        payload:data
    };
}

export function deleteProductData(data){
    return{
        type:"delete-product-data",
        payload:data
    };
}


