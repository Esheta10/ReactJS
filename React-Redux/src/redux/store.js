import {createStore} from "redux"
import rootReducer from "./reducer/index"

// create redux store 
const store = createStore(rootReducer);

export default store;


