const initialState = {
    products: [],
}
const productReducer = (state=initialState, action) => {

    if(action.type === "ADD_TO_PRODUCT"){
        console.log("add to product reducer")
            return state;
    } else{
        return state;
    }
}