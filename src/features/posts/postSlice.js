export function postReducer(state = {}, action) {
    if (action.type === "edit-user-post") {
        return {
            ...state,
            name: action.payload.name

        }

    }
    return state
}

export const initialPost = {
    name:"John Dodo"
}

export function selectPost(state){
    return state.posts.name
}
export function editPost(newName){
    return{
        type:"edit-user-post",
        payload:{
            name:newName
        }
    };
}