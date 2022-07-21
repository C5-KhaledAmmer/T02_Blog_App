import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user"
import postReducer from "./reducers/post"

export default configureStore({
    reducer:{
        userReducer,
        postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
   
})