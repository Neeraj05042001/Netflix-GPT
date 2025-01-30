import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    showLanguageButton: false,
  },
  reducers: {
    toggleGptSearchButton: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    toggleLanguageButton: (state) => {
      state.showLanguageButton = !state.showLanguageButton;
    },
  },
});

export const { toggleGptSearchButton, toggleLanguageButton } = gptSlice.actions;

export default gptSlice.reducer;
