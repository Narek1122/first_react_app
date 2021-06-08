
export function currentUserReducer(state = {}, action) {
    if (action.type === "edit-current-user-name") {
        return {
            ...state,
            name: action.payload.name

        }

    }
    return state
}

export const initialCurrentUser = {
    name:"John Dodo"
}

export function selectName(state){
    return state.currentUser.name
}
export function editName(newName){
    return{
        type:"edit-current-user-name",
        payload:{
            name:newName
        }
    };
}
