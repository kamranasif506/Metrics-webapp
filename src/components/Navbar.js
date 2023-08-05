import React, { useState } from 'react';
import { FaGear, FaMicrophone, FaAngleLeft } from 'react-icons/fa6';
import { Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLeagueData } from '../redux/league/leagueSlice';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectYear, setSelectYear] = useState('2022');

  const handleYearChange = (event) => {
    const year = event.target.text;
    if (year !== selectYear) {
      setSelectYear(year);
      dispatch(fetchLeagueData(year));
    }
  };

  const years = Array.from({ length: 2023 - 2010 + 1 }, (_, index) => (2010 + index).toString());

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#3F1052' }}>
      <div className="container">
        {location.pathname !== '/' && (
          <Link className="navbar-brand mx-auto" to="/" style={{ textDecoration: 'none', display: 'contents' }}><FaAngleLeft className="mr-auto" /></Link>
        )}
        {location.pathname === '/' && (
        <div className="form-group mr-auto">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-primary">
              {selectYear}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {years.map((year) => (
                <Dropdown.Item key={year} onClick={handleYearChange} value={year}>
                  {year}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        )}

        <p className="navbar-brand mx-auto my-auto p-0">
          {location.pathname === '/' ? 'League Standings' : 'League/Team Stats'}
        </p>

        <ul className="navbar-nav ml-auto" style={{ display: 'contents' }}>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FaMicrophone />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FaGear />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
