import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import do_decrypt from "../../lib/encryption";

interface liveMarketState {
  market: any | null;
  loading: boolean;
  error: any | null;
}

export const fetchLiveMarketData = createAsyncThunk(
  "board/fetchLiveMarketData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://comx-sand-api.afex.dev/api/security-price/live"
      );
      const data = do_decrypt(response.data.data);

      return data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

const liveMarketSlice: any = createSlice({
  name: "market",
  initialState: {
    market: null,
    loading: false,
    error: null,
  } as liveMarketState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveMarketData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchLiveMarketData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.market = action.payload;
        }
      )
      .addCase(fetchLiveMarketData.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default liveMarketSlice.reducer;
