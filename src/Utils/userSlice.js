import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    addUsers: (state, action) => {
      return action.payload;
    },

    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
