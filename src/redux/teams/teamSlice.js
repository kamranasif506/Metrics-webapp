import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, apikey } from '../../config/config';

const headers = {
  'x-rapidapi-host': 'v3.football.api-sports.io',
  'x-rapidapi-key': apikey,
};

export const fetchTeamData = createAsyncThunk(
  'teams/fetchTeamData',
  async ({ id, year }) => {
    const url = `${baseUrl}&season=${year}&team=${id}`;
    const response = await axios.get(url, { headers });
    const res = response.data.response[0].league.standings[0];
    return res;
  },

);

const initialState = {
  teamData: [],
  isLoading: false,
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.isLoading = false;
        const [data] = action.payload;
        state.teamData = data;
      })
      .addCase(fetchTeamData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default teamSlice.reducer;
