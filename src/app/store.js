import {combineReducers, createStore} from 'redux'
import {currentUserReducer, initialCurrentUser} from "../features/currentUser/currentUserSlice"
import {todosReducer, initialTodos} from "../features/todos/todosSlice"
import {postReducer, initialPost} from "../features/posts/postSlice"
import {test} from "../features/test/testSlice"
import {userDataReducer} from "../features/userData/userDataSlice"
import {productReducer} from "../features/product/productSlice"
import {allProductReducer} from "../features/product/allProductSlice";

const store = createStore(combineReducers({
        todos: todosReducer,
        currentUser: currentUserReducer,
        posts: postReducer,
        test: test,
        userData:userDataReducer,
        product:productReducer,
        GetAllProductData:allProductReducer

    })

    , {
        todos: '',
        posts:initialPost,
        currentUser: '',
        test:'',
        userData:'',
        product:'',
        GetAllProductData:''
    })

export default store