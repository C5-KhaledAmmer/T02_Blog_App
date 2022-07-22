import { createSlice } from "@reduxjs/toolkit";
export const postReducer =  createSlice({
    name:"post",
    initialState:{
        currentPost :{
            post:"",
            index:""
        },
        posts:[],
    },
    reducers:{
    setPosts:(state,action)=>{
        state.posts = action.payload
    },
    setCurrentPost:(state,action)=>{
        state.currentPost = action.payload
    }
    }
});
export const {setPosts,setCurrentPost} = postReducer.actions;
export default postReducer.reducer;