import { createSlice } from "@reduxjs/toolkit";
export const userReducer =  createSlice({
    name:"user",
    initialState:{
        user:null,
        users:[]
    },
    reducers:{
        setUser : (state,action)=>{
            state.user = action.payload.user;
        },
        updateUser : (state,action)=>{
            state.user = action.payload.user; 
        },
        setUsers :(state,action)=>{
            state.users = action.payload; 
        }
        
    }
});

export const {setUser,updateUser,setUsers} = userReducer.actions;
export default userReducer.reducer;