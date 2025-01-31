import { createSlice } from "@reduxjs/toolkit";
import lang from "./languageConstants";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    
  },
  reducers: {
    toggleGptSearchButton: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    
  },
});

export const { toggleGptSearchButton } =
  gptSlice.actions;

export default gptSlice.reducer;
