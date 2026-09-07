import {configureStore} from "@reduxjs/toolkit"
import popupReducer from "./features/popup/popup.slice"

const store = configureStore({
    reducer: {
        popup: popupReducer
    },
})

export default store;