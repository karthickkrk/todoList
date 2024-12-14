import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  selectedBox: [],
};
const todoSlice = createSlice({
  name: "todoSlicer",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      console.log("action--", action);

      state.todos.push(action.payload);
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((_, index) => {
        return index !== action.payload;
      });
    },
    checkBoxSelected: (state, action) => {
      if (state.selectedBox) {
        state.selectedBox.push(action.payload);
        state.selectedBox = state.selectedBox.filter((_, index) => {
          return index !== action.payload;
        });
      }

      // console.log(action);
      // state.selectedBox = state.selectedBox.filter((checkbox) => {
      //   const checked = checkbox.checked === action.payload;
      //const checkboxOutput = state.selectedBox.checked.push(action.payload);
      //console.log("checkboxOutput---", checked);
      //return checkboxOutput;
      // });
    },
  },
});
export const { addTodos, deleteTodos, checkBoxSelected } = todoSlice.actions;
export default todoSlice.reducer;
