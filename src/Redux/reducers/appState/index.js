import { createSlice } from "@reduxjs/toolkit";
export const appReducer =  createSlice({
    name:"app",
    initialState:{
        //* homeContent:0 --> show posts otherwise show Users
        homeContent:0,
    },
    reducers:{
    setHomeContent:(state,action)=>{
        state.homeContent = action.payload;
    }
    }
});
export const {setHomeContent} =  appReducer.actions;
export default  appReducer.reducer;