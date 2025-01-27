import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore({
  reducer: {
    User: userReducer,
  },
});

export default appStore;
