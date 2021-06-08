export function allProductReducer(state = {},action){

    switch(action.type){
        case 'get-product-data':
            return{

                ...state,
                data:action.payload
            }
            break



    }


    return state

}

export function selectAllProductData(state){
    return state.GetAllProductData.data
}


export function editAllProductData(data){
    return{
        type:"get-product-data",
        payload:data
    };
}