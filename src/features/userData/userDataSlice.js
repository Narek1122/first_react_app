export function userDataReducer(state = {},action){

    switch(action.type){
        case 'user-data':
            return{


                id:action.payload.id,
                email:action.payload.email,
                name:action.payload.name
            }
            break
        case 'user-data-name':
            if(action.payload.name){
                return{

                    ...state,

                    name:action.payload.name

                }
            }
            else if(action.payload.email){
                return{

                    ...state,

                    email:action.payload.email

                }
            }

            break
    }


    return state

}

export function selectUserdata(state){
    return state.userData
}
export function editUserdata(data){
    return{
        type:"user-data",
        payload:{
            id:data.id,
            email:data.email,
            name:data.name
        }
    };
}

export function chnageUserdataName(data){
    return{
        type:"user-data-name",
        payload:{
            name:data.name,
            email:data.email
        }
    };
}

