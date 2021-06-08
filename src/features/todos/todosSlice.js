export function todosReducer(state = {}, action) {
    if (action.type === "todo-add") {
        return {
            ...state,
            name: action.payload.name

        }

    }
    return state
}

export const initialTodos = [

    {
        id: 1,
        text: 'some_text'
    },
    {
        id: 2,
        text: 'some_text_2'
    },
    {
        id: 3,
        text: 'some_text_3'
    }

]