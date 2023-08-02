import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const leagueUrl = 'https://v3.football.api-sports.io/standings?league=39&season=2023';
const apiKey = '500de7e2f8a3b6c55d44bf8e8f05bded';
const headers = {
  'x-rapidapi-host': 'v3.football.api-sports.io',
  'x-rapidapi-key': apiKey,
};

export const fetchLeagueData = createAsyncThunk(
  'leagues/fetchLeagueData',
  async () => {
    const response = await axios.get(leagueUrl, { headers });
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
        state.leagueData = action.payload[0].league;
      })
      .addCase(fetchLeagueData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default leagueSlice.reducer;
