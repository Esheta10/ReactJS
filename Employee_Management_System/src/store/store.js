import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import popupReducer from "./features/popup/popup.slice";
import employeeReducer from "./features/employee/employee.slice";

// custom local storage wrapper to fix getitem / setitem issue in Vite
const customStorage = {
    getItem: (key) => {
        return Promise.resolve(localStorage.getItem(key));
    },
    setItem: (key, value) => {
        localStorage.setItem(key, value);
        return Promise.resolve();
    },
    removeItem: (key) => {
        localStorage.removeItem(key);
        return Promise.resolve();
    }
};

// Reducers ko combine karein
const rootReducer = combineReducers({
    popup: popupReducer,
    employee: employeeReducer
});

// Persist configuration
const persistConfig = {
    key: "root",
    storage: customStorage, // Custom local storage wrapper use karein
    whitelist: ["employee"] // Sirf employee data ko save rakhega, popup ko reset hone dega
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Redux Toolkit ki actions serialization warning ko bypass karne ke liye
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);
export default store;




