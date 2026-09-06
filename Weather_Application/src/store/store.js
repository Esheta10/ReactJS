import {createStore, compose, applyMiddleware} from "redux";
import { weatherReducer } from "./reducers/weatherReducer";
import {thunk} from "redux-thunk"

const reduxDevtool =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    weatherReducer,
    compose(
        applyMiddleware(thunk), 
        reduxDevtool
    )
);

export default store;

