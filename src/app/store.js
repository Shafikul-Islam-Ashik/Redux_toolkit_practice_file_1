import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice";
import bgReducer from "../features/bgSlice";
import todoReducer from "../features/todoSlice";

// create store
const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    bg: bgReducer,
  },
  devTools: true,
});

// export store
export default store;
