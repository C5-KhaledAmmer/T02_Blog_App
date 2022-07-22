import { createSlice } from "@reduxjs/toolkit";
export const appReducer = createSlice({
  name: "app",
  initialState: {
    //* homeContent:0 --> show posts otherwise show Users
    homeContent: 0,
    showDialog: false,
  },
  reducers: {
    setHomeContent: (state, action) => {
      state.homeContent = action.payload;
    },
    setShowDialog: (state, action) => {
      state.showDialog = action.payload;

    },
  },
});
export const { setHomeContent,setShowDialog } = appReducer.actions;
export default appReducer.reducer;
