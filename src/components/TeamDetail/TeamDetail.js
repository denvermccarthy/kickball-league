import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchTeamsById } from '../../services/teams';

export default function TeamDetail() {
  const [team, setTeam] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const fetch = async () => {
      try {
        const teamData = await fetchTeamsById(id);
        setTeam(teamData);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, [id]);

  if (!team) return <div>Loading....</div>;

  return (
    <div>
      <Link to={'/teams'}>{'<<<<'}</Link>
      <h1>{team.name}</h1>
      <h3>
        {team.city}, {team.state}
      </h3>
      <h3>
        Players:
        <ul>
          {team.players.map((item) => (
            <li key={item.id}>
              <NavLink exact to={`/players/${item.id}`}>
                {item.name}
              </NavLink>
              , {item.position}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
}
