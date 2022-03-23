import React, { useEffect, useState } from 'react';
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
  return <div>PlayerDetail</div>;
}
