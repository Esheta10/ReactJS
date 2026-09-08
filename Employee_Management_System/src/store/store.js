import {configureStore} from "@reduxjs/toolkit"
import popupReducer from "./features/popup/popup.slice"

const store = configureStore({
    reducer: {
        // ab store mein "popup" naam ki property hogi
        popup: popupReducer
    },
})

export default store;



