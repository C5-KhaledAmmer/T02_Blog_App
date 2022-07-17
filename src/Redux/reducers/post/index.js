import { createSlice } from "@reduxjs/toolkit";
export const postReducer =  createSlice({
    name:"post",
    initialState:{
        currentPost :0,
        posts:[],
    },
    reducers:{

    }
});

export default createSlice.reducer;