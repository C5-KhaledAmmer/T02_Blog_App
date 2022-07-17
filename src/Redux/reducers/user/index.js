import { createSlice } from "@reduxjs/toolkit";
export const userReducer =  createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        setUser : (state,payload)=>{
            state.user = payload.user;
        },
        updateUser : (state,payload)=>{
            state.user = payload.user; 
        }
        
    }
});

const {setUser,updateUser} = userReducer.actions;
export default createSlice.reducer;