import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from './league/leagueSlice';
import teamReducer from './teams/teamSlice';

const store = configureStore({
  reducer: {
    leagues: leagueReducer,
    teams: teamReducer,
  },
});

export default store;
