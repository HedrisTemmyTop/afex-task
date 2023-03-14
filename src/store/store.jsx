import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./slices/boardSlice.ts";
import LiveMarketSlice from "./slices/LiveMarketSlice";
import ModalSlice from "./slices/ModalSlice";

const store = configureStore({
  reducer: {
    boards: boardSlice,
    modal: ModalSlice,
    market: LiveMarketSlice,
  },
});

export default store;
