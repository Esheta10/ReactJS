import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null,
}

const fetchUser = createAsyncThunk(

    'user/fetchUser',
    async(payload, {rejectWithValue}) => {

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue("Something went wrong");
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUser.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {} = userSlice.actions;
export {fetchUser}
export default userSlice.reducer;