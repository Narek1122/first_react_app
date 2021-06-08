export function test(state = {},action){

    switch(action.type){
        case 'test':
        return{

                id: action.payload.id,
                title: action.payload.title,
                userId:action.payload.userId,
                complited:action.payload.complited
        }
        break
    }


    return state

}

export function selectTest(state){
    return state.test
}
export function editTest(data){
    return{
        type:"test",
        payload:{
            userId:data.userId,
            id:data.id,
            title:data.title,
            complited:data.complited
        }
    };
}

export function deleteTest(state){
    state.filter((i) =>{
        return i.id != 1
    })
}