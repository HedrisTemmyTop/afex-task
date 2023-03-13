import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./slices/boards/boardSlice.ts";
const store = configureStore({
  reducer: {
    boards: boardSlice,
  },
});

export default store;
