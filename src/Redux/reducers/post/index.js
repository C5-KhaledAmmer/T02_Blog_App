import { createSlice } from "@reduxjs/toolkit";
export const postReducer =  createSlice({
    name:"post",
    initialState:{
        currentPost :{
            post:{body:"",title:""},
            index:""
        },
        posts:JSON.parse(localStorage.getItem("posts")) || [],
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