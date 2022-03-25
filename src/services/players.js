import { checkError, client } from './client';

export const fetchPlayers = async () => {
  const resp = await client.from('players').select();
  return checkError(resp);
};

export const fetchPlayersById = async (id) => {
  const resp = await client.from('players').select('*, teams(name)').match({ id }).single();
  return checkError(resp);
};
