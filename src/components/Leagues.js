import React from 'react';
import { useSelector } from 'react-redux';
import LeagueList from './LeagueList';

const Leagues = () => {
  const leagueData = useSelector((store) => store.leagues.leagueData);
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-6 m-auto">
          <img src={leagueData.logo} style={{ width: '70%', margin: '0 auto' }} alt={leagueData.name} className="img" />
        </div>
        <div className="col-6 mx-auto my-auto">
          <h1 className="m-0" style={{ fontWeight: 'bold', color: '#3F1052' }}>{ leagueData.name }</h1>
          <p className="m-0" style={{ color: '#3F1052' }}>
            Country:
            {' '}
            { leagueData.country }
            {' '}
          </p>
          <p className="m-0" style={{ color: '#3F1052' }}>
            Season:
            {' '}
            { leagueData.season }
            {' '}
          </p>
        </div>
      </div>
      <div className="row my-auto" style={{ background: '#3F1052' }}>
        <p className="col-12 my-auto text-white" style={{ paddingLeft: '5%', paddingBottom: '1%' }}>League Rankings</p>
      </div>
      <div className="row">
        {leagueData.standings && leagueData.standings[0] ? (
          leagueData.standings[0].map((standing) => (
            <LeagueList
              key={standing.team.id}
              id={standing.team.id}
              name={standing.team.name}
              logo={standing.team.logo}
              rank={standing.rank}
            />
          ))
        ) : (
          <p>No standings available</p>
        )}
      </div>
    </section>
  );
};

export default Leagues;
