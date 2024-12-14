import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Features/todoSlice";

const store = configureStore({
  reducer: {
    todoList: todosReducer,
  },
});
export default store;
