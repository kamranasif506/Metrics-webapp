import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Leagues from './components/Leagues';
import Navbar from './components/Navbar';
import { fetchLeagueData } from './redux/league/leagueSlice';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.leagues.isLoading);

  useEffect(() => {
    dispatch(fetchLeagueData());
  }, [dispatch]);
  // console.log(isLoading);
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Leagues />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
