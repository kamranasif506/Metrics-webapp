import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Leagues from '../components/Leagues';
import Team from '../components/Team';

describe('Component testing', () => {
  test('League component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Leagues />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Team component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Team />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
