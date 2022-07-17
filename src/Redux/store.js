import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/post";


export default configureStore({
    reducer: {
        postReducer:postReducer,
    },
  });