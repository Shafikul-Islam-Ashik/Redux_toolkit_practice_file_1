import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    set: (state, action) => {
      state.count = 1000;
    },
    manualSet: (state, action) => {
      state.count = action.payload;
    },
  },
});

// export selectors

// export actions
export const { increment, decrement, reset, set, manualSet } =
  counterSlice.actions;

// export reducer
export default counterSlice.reducer;
