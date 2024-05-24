import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStarships } from "../../helpers/fetchStarships";

export const fetchStarshipData = createAsyncThunk(
    "starshipDataSlice/fetchStarshipData",
    async (url) => {
        const starShipsData = await fetchStarships(url);
        return starShipsData;
    }
)

const starshipDataSlice = createSlice({
    name: "starshipData",
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStarshipData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStarshipData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const fetchedData = action.payload;
                if (state.data) {
                    const newResults = fetchedData.results.filter((starship) => {
                        return !state.data.results.some((existingStarship) => {
                            return existingStarship.url === starship.url;
                        })
                    })
                    state.data  = {
                        ...fetchedData,
                        results: [...state.data.results, ...newResults]
                    };
                } else {
                    state.data = fetchedData;
                }
            })
            .addCase(fetchStarshipData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default starshipDataSlice.reducer;