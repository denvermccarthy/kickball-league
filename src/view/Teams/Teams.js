import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchTeams();
        setTeams(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Link exact to={'/'}>
        {`<< Home`}
      </Link>
      <br />
      Teams:
      <ul>
        {teams.map((item) => (
          <li key={item.id}>
            <Link to={`/teams/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
