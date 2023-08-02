import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from './league/leagueSlice';

const store = configureStore({
  reducer: {
    leagues: leagueReducer,
  },
});

export default store;
