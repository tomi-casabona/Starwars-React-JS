import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFilmInfo } from "../../helpers/filmHelpers/fetchFilmInfo";

export const fetchFilm = createAsyncThunk(
  "pilotsSlice/fetchFilm",
  async (url) => {
    const filmData = await fetchFilmInfo(url);
    return filmData;
  }
);

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.status = "succeeded";
        const fetchedData = action.payload;
        state.data = fetchedData;
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default filmsSlice.reducer;
