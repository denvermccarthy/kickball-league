import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchPlayersById } from '../../services/players';

export default function PlayerDetail() {
  const [player, setPlayer] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchPlayersById(id);
        setPlayer(data);
      } catch (e) {
        alert(e.message);
      }
    };
    fetch();
  }, [id]);

  if (!player) return <div>loading</div>;
  return (
    <div>
      <NavLink to={'/players'}>{'<<<'}</NavLink>
      <h1>{player.name}</h1>
      <p>{`${player.position} for the ${player.teams.name}`}</p>
    </div>
  );
}
