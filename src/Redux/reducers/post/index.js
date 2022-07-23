import { createSlice } from "@reduxjs/toolkit";
export const postReducer =  createSlice({
    name:"post",
    initialState:{
        currentPost :{
            post:{body:"",title:""},
            index:0
        },
        posts:JSON.parse(localStorage.getItem("posts")) || [],
        showComment:false
    },
    reducers:{
    setPosts:(state,action)=>{
        state.posts = action.payload
    },
    setCurrentPost:(state,action)=>{
        state.currentPost = action.payload
    },
    setShowComment:(state,action)=>{
        state.showComment = !state.showComment
    }
    }
});
export const {setPosts,setCurrentPost,setShowComment} = postReducer.actions;
export default postReducer.reducer;