import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, apikey } from '../../config/config';

const headers = {
  'x-rapidapi-host': 'v3.football.api-sports.io',
  'x-rapidapi-key': apikey,
};

export const fetchLeagueData = createAsyncThunk(
  'leagues/fetchLeagueData',
  async (year) => {
    const response = await axios.get(`${baseUrl}&season=${year}`, { headers });
    return response.data.response;
  },
);

const initialState = {
  leagueData: [],
  isLoading: false,
};

const leagueSlice = createSlice({
  name: 'leagues',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagueData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLeagueData.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.leagueData = action.payload[0].league;
        }
      })
      .addCase(fetchLeagueData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default leagueSlice.reducer;
