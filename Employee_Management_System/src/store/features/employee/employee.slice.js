import { createSlice } from '@reduxjs/toolkit'
import { fetchEmployees, postEmployees, deleteEmployee } from './employee.thunk'
const initialState = {
  employees: [],
  loading: false,
  error: null,
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    toggleHighlight: (state, action) => {
      const employee = state.employees.find(emp => emp.id === action.payload);
      if (employee) {
        employee.highlight = !employee.highlight;
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload.map(emp => ({ ...emp, highlight: false }));
    })
    .addCase(fetchEmployees.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message;
    })
     .addCase(postEmployees.pending, (state) => {
        state.loading = true;
    })
    .addCase(postEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.unshift({ ...action.payload, highlight: false });
    })
    .addCase(postEmployees.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message;
    })
    .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
    })
     .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming the API returns the deleted user object or its id
        const deletedId = action.payload.id;
        state.employees = state.employees.filter((emp) => emp.id !== deletedId);
    })
    .addCase(deleteEmployee.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  }
})

export const { toggleHighlight } = employeeSlice.actions

export default employeeSlice.reducer

