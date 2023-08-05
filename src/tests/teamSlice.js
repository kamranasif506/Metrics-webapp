import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchTeamData } from '../redux/teams/teamSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('teamSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch Team data successfully and update state', async () => {
    const mockLeague = [{ id: 1, name: 'Team 1', rank: 1 }, { id: 2, name: 'Team 2', rank: 2 }];

    fetchMock.mockResponseOnce(JSON.stringify(mockLeague));

    const store = mockStore({ team: { data: null, error: null } });

    // Dispatch the fetchMissions action and wait for it to complete
    await store.dispatch(fetchTeamData());

    // Get the actions that were dispatched to the mock store
    const actions = store.getActions();

    // Expectations
    expect(actions[0].type).toEqual(fetchTeamData.pending.type);
    expect(actions[1].type).toEqual(fetchTeamData.fulfilled.type);
    expect(store.getState().team.error).toBeNull();
  });

  // ... other test cases ...
});
