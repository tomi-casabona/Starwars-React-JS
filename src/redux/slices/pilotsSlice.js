import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPilotInfo } from "../../helpers/fetchPilotInfo";

export const fetchPilot = createAsyncThunk(
  "pilotsSlice/fetchPilot",
  async (url) => {
    const pilotData = await fetchPilotInfo(url);
    return pilotData;
  }
);

const pilotsSlice = createSlice({
  name: "pilots",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPilot.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPilot.fulfilled, (state, action) => {
        state.status = "succeeded";
        const fetchedData = action.payload;
        state.data = fetchedData;
      })
      .addCase(fetchPilot.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pilotsSlice.reducer;
