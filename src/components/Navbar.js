import React from 'react';
import { FaGear, FaMicrophone, FaAngleLeft } from 'react-icons/fa6';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#3F1052' }}>
    <div className="container">
      <FaAngleLeft className="mr-auto" />
      <div className="form-group mr-auto">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-primary" style={{ background: '#53116E !important', color: 'white !important', border: 'var(--bs-btn-border-width) solid #3F1052 !important' }}>
            2023
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>2023</Dropdown.Item>
            <Dropdown.Item>2022</Dropdown.Item>
            <Dropdown.Item>2021</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Link className="navbar-brand mx-auto" to="/">Title</Link>

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

export default Navbar;
