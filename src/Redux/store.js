import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user"
import postReducer from "./reducers/post"
import appReducer from "./reducers/app"


export default configureStore({
    reducer:{
        userReducer,
        postReducer,
        appReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
   
})