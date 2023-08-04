import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchLeagueData } from '../redux/league/leagueSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('leagueSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch League data successfully and update state', async () => {
    const mockLeague = [{ id: 1, name: 'Team 1', rank: 1 }, { id: 2, name: 'Team 2', rank: 2 }];

    fetchMock.mockResponseOnce(JSON.stringify(mockLeague));

    const store = mockStore({ league: { data: null, error: null } });

    // Dispatch the fetchMissions action and wait for it to complete
    await store.dispatch(fetchLeagueData());

    // Get the actions that were dispatched to the mock store
    const actions = store.getActions();

    // Expectations
    expect(actions[0].type).toEqual(fetchLeagueData.pending.type);
    expect(actions[1].type).toEqual(fetchLeagueData.fulfilled.type);
    expect(store.getState().league.error).toBeNull();
  });

  // ... other test cases ...
});
