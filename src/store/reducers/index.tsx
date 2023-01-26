import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  name: "todos",
  initialState: [] as any[],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      state.slice(action.payload);
    },
  },
});

export const menuToggleSlice = createSlice({
  name: "menuToggle",
  initialState: { shrink: false },
  reducers: {
    changeMenuState(state) {
      console.log(state.shrink);
      state.shrink = !state.shrink;
    },
  },
});

export const { changeMenuState } = menuToggleSlice.actions;
export const { addTodo, removeTodo } = todosSlice.actions;
// export default rootReducer;
