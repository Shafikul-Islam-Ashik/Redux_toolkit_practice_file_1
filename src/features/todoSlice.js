import { createSlice } from "@reduxjs/toolkit";

// create slice
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: ["alo", "potol", "lao"],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item == action.payload.old) {
          return action.payload.new;
        } else {
          return item;
        }
      });
    },
  },
});

// export selectors

// export actions
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

// export reducer
export default todoSlice.reducer;
