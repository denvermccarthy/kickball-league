import React, { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchTeams();
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return <div>Teams</div>;
}
