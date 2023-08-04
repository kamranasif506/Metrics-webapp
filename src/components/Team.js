import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamData } from '../redux/teams/teamSlice';

const Team = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.teams.isLoading);
  const teamData = useSelector((store) => store.teams.teamData);

  useEffect(() => {
    dispatch(fetchTeamData({ id, year: '2022' }));
  }, [dispatch]);
  // console.log(isLoading);
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  // Use the 'id' to fetch and display league details from an API or data source
  if (Object.keys(teamData).length === 0) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',
      }}
      >
        <h1>No Team data available</h1>
      </div>
    );
  }
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-6 m-auto">
          <img
            src={teamData.team.logo}
            style={{
              width: '70%', margin: '0 auto', paddingTop: '2%', paddingBottom: '2%',
            }}
            alt={teamData.team.name}
            className="img"
          />
        </div>
        <div className="col-6 mx-auto my-auto">
          <h1 className="m-0" id="statTitle" style={{ fontWeight: 'bold', color: '#3F1052' }}>{ teamData.team.name }</h1>
          <p className="m-0" style={{ color: '#3F1052' }}>
            Rank:
            {' '}
            { teamData.rank }
            {' '}
          </p>
          <p className="m-0" style={{ color: '#3F1052' }}>
            Points:
            {' '}
            { teamData.points }
            {' '}
          </p>

        </div>
      </div>
      <section id="all-matches" className="stats">
        <div className="row my-auto" style={{ background: '#3F1052' }}>
          <p className="col-12 my-auto text-white" style={{ paddingLeft: '3%', paddingBottom: '1%' }}>All Matches</p>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Played</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.all.played }</p>
          </div>
        </div>

        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Won</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.all.win }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Lose</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.all.lose }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Draw</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.all.draw }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GF</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.all.goals.for }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GA</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.all.goals.against }</p>
          </div>
        </div>
      </section>
      <section id="home-matches" className="stats">
        <div className="row my-auto" style={{ background: '#3F1052' }}>
          <p className="col-12 my-auto text-white" style={{ paddingLeft: '3%', paddingBottom: '1%' }}>Home Matches</p>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Played</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.home.played }</p>
          </div>
        </div>

        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Won</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.home.win }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Lose</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.home.lose }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Draw</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.home.draw }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GF</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.home.goals.for }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GA</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.home.goals.against }</p>
          </div>
        </div>
      </section>
      <section id="away-matches" className="stats">
        <div className="row my-auto" style={{ background: '#3F1052' }}>
          <p className="col-12 my-auto text-white" style={{ paddingLeft: '3%', paddingBottom: '1%' }}>Away Matches</p>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Played</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.away.played }</p>
          </div>
        </div>

        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Won</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.away.win }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Lose</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.away.lose }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Draw</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.away.draw }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GF</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.away.goals.for }</p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GA</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">{ teamData.away.goals.against }</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;
