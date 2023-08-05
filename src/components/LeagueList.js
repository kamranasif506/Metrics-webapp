import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from 'react-icons/fa6';

const LeagueList = ({
  id, name, logo, rank, year,
}) => (
  <div
    className="col-6 m-0 p-0"
    style={{
      cursor: 'pointer', color: '#3F1052', borderLeft: '1px solid #53116E', borderBottom: '1px solid #53116E',
    }}
  >
    <Link to={`/league/${id}/${year}`} style={{ textDecoration: 'none' }}>

      <div id={id} className="w-100" style={{ position: 'relative' }}>
        <img src={logo} style={{ width: '50%', paddingTop: '5%' }} alt={name} className="img mx-auto" />
        <p className="d-flex justify-content-end m-0" style={{ color: '#3F1052', paddingRight: '3%', fontWeight: 'bold' }}>{name}</p>
        <p className="d-flex justify-content-end m-0" style={{ color: '#3F1052', paddingRight: '3%', fontWeight: 'bold' }}>{rank}</p>
        <FaCircleArrowRight style={{
          color: '#3F1052', position: 'absolute', right: '3px', top: '4px',
        }}
        />
      </div>
    </Link>
  </div>
);

LeagueList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default LeagueList;
