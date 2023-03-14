import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    openModal: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
