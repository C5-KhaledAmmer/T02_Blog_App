import { createSlice } from "@reduxjs/toolkit";
export const userReducer =  createSlice({
    name:"user",
    initialState:{
        user:JSON.parse(localStorage.getItem("user")) || {},
        users:JSON.parse(localStorage.getItem("users")) || []
    },
    reducers:{
        setUser : (state,action)=>{
            state.user = action.payload;
        },
        updateUser : (state,action)=>{
            state.user = action.payload; 
        },
        setUsers :(state,action)=>{
            state.users = action.payload; 
        }
        
    }
});

export const {setUser,updateUser,setUsers} = userReducer.actions;
export default userReducer.reducer;