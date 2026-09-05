// Root reducer --> multiple reducers ko combine karke single reducer banata hai
// like productReducer, cartReducer


import {combineReducers} from "redux"
import {productReducer} from "./productReducer"

const rootReducer = combineReducers({
    productReducer, // keys jisse , useSelector state read karega
  
})

export default rootReducer;


