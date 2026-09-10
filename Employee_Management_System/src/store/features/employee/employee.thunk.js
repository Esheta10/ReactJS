import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import api from "../../../config/axiosInstance"

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
     async () => {
        const response = await api.get("/users")
        return response.data.users;
    }
)

export const postEmployees = createAsyncThunk(
    'employees/postEmployees',
    async (employeeData) => {
        const response = await api.post("/users/add", employeeData)
        return response.data;
    }
)

export const deleteEmployee = createAsyncThunk(
    'employees/deleteEmployee',
    async (id) => {
        const response = await api.delete(`/users/${id}`)
        return response.data;
    }
)




