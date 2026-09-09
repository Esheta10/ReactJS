import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    employeePopup : false,
    deletePopup: false,
    selectedEmployeeId: null,
}

const popupSlice = createSlice({
    name: "popup", // feature ka naam
    initialState,
    reducers: {
        // ye functions state ko update karte hain
        openEmployeePopup: (state, action) => {
            state.employeePopup = action.payload ?? true;
        },
        closeEmployeePopup: (state, action) => {
            state.employeePopup = false;
        },
        openDeletePopup: (state, action) => {
            state.deletePopup = true;
            state.selectedEmployeeId = action.payload;
        },
        closeDeletePopup: (state, action) => {
            state.deletePopup = false;
            state.selectedEmployeeId = null;
        }
    }
})

// ye actions component mein use honge
export const  { openEmployeePopup, closeEmployeePopup, openDeletePopup, closeDeletePopup } = popupSlice.actions;
// ye store mein register hoga
export default popupSlice.reducer;

