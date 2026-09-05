// woh function define karo jo action object { type, payload } return karte hain

import {ADD_PRODUCT, INCREMENT} from "../constants/productConstant"

// action creator

export const addProduct = (details) => {

    return {
        type: "ADD_PRODUCT", // action name
        payload: details, // data -> {id: 1, name: "Samsung Phone"}
    }
}

export const increment = () => {
    return {
        type: "INCREMENT",
    }
}

