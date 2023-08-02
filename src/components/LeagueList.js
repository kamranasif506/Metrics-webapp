import React from 'react';
import { PropTypes } from 'prop-types';

const LeagueList = ({
  id, name, logo, rank,
}) => (
  <div
    className="col-6 m-0 p-0"
    style={{
      cursor: 'pointer', color: '#3F1052', borderLeft: '1px solid #53116E', borderBottom: '1px solid #53116E',
    }}
  >
    <div id={id} className="w-100">
      <img src={logo} style={{ width: '50%', paddingTop: '5%' }} alt={name} className="img mx-auto" />
      <p className="d-flex justify-content-end m-0" style={{ color: '#3F1052', paddingRight: '3%', fontWeight: 'bold' }}>{name}</p>
      <p className="d-flex justify-content-end m-0" style={{ color: '#3F1052', paddingRight: '3%', fontWeight: 'bold' }}>{rank}</p>
    </div>
  </div>
);

LeagueList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
};

export default LeagueList;
