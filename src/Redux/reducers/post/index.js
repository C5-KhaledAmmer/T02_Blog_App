import { createSlice } from "@reduxjs/toolkit";
export const postReducer =  createSlice({
    name:"post",
    initialState:{
        currentPost :0,
        posts:[],
    },
    reducers:{
    setPosts:(state,action)=>{
        state.posts = action.payload
    }
    }
});
export const {setPosts} = postReducer.actions;
export default postReducer.reducer;