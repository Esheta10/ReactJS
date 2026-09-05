// Reducer -> current state aur action ko lekar, new state return karta hai

import { ADD_PRODUCT, INCREMENT} from "../constants/productConstant"

// initial state ki values

const initialState = {
    products: [],
    count: 0,
}

export const productReducer = (state = initialState, action) => {

    if(action.type === ADD_PRODUCT){
        return {
            ...state,
            // current products array mein action.payload append kiya
            products: [...state.products, action.payload],
        };
    }

    if(action.type === INCREMENT){

        return {
            ...state,
            count: state.count + 1,
        }
    }

    return state; // default
}


/** Yahan par new state return karne ke liye, current state ko pehle spread operator ka use karke save kar rahe,
 * then usme new changed state append kar rahe
 */










