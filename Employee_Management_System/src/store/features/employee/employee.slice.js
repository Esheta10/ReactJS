import { createSlice } from '@reduxjs/toolkit';
import { fetchEmployees, postEmployees, deleteEmployee } from './employee.thunk';

// 1. Initial State: Store ka starting data
const initialState = {
  employees: [], // Saare employees ki list
  loading: false, // API call chal rahi hai ya nahi
  error: null,    // Agar koi error aaye toh yahan save hoga
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  
  // 2. Reducers: Local state changes ke liye (jaise heart/highlight toggle karna)
  reducers: {
    toggleHighlight: (state, action) => {
      // action.payload mein employee ki ID aayegi
      const employee = state.employees.find(emp => emp.id === action.payload);
      if (employee) {
        // Agar highlight true hai toh false kar do, aur false hai toh true
        employee.highlight = !employee.highlight;
      }
    }
  },

  // 3. ExtraReducers: Async Thunks ke status (pending, fulfilled, rejected) ko handle karne ke liye
  extraReducers: (builder) => {
    builder
      // --- FETCH EMPLOYEES (Get data from API) ---
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true; // Data aate waqt loader on karo
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false; // Loader band karo
        // Saare employees mein default 'highlight: false' property add kar do
        state.employees = action.payload.map(emp => ({ ...emp, highlight: false }));
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Error save karo
      })

      // --- POST EMPLOYEES (Add new employee) ---
      .addCase(postEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEmployees.fulfilled, (state, action) => {
        state.loading = false;
        // Naye employee ko list ke sabse shuru (top) mein add karo aur highlight: false do
        state.employees.unshift({ ...action.payload, highlight: false });
      })
      .addCase(postEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // --- DELETE EMPLOYEE (Remove employee) ---
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        const deletedId = action.payload.id;
        // Deleted employee ko list se hata do (filter out kar do)
        state.employees = state.employees.filter((emp) => emp.id !== deletedId);
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Actions ko export karo taaki components mein dispatch kar sakein
export const { toggleHighlight } = employeeSlice.actions;

// Reducer ko store mein register karne ke liye export karo
export default employeeSlice.reducer;

