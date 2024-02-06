import { createSlice } from "@reduxjs/toolkit";

// create slice
const bgSlice = createSlice({
  name: "background",
  initialState: {
    bg: "red",
  },
  reducers: {
    makeRed: (state, action) => {
      state.bg = "red";
    },
    makeGreen: (state, action) => {
      state.bg = "green";
    },
    makeYellow: (state, action) => {
      state.bg = "yellow";
    },
  },
});

// export selectors

// export actions
export const { makeRed, makeGreen, makeYellow } = bgSlice.actions;

// export reducer
export default bgSlice.reducer;
