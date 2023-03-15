import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import do_decrypt from "../../lib/encryption";

interface BoardState {
  boardData: any | null;
  loading: boolean;
  error: any | null;
}

const fetchBoard = async () => {
  try {
    const response = await axios.get(
      "https://comx-sand-api.afex.dev/api/securities/boards"
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchBoardData = createAsyncThunk(
  "board/fetchBoardData",
  async (_, thunkAPI) => {
    try {
      const response = await fetchBoard();
      const data = do_decrypt(response);
      console.log(data);
      return data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boardData: null,
    loading: false,
    error: null,
  } as BoardState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchBoardData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.boardData = action.payload;
        }
      )
      .addCase(fetchBoardData.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boardSlice.reducer;
