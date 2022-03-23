import { checkError, client } from './client';

export const fetchTeams = async () => {
  const resp = await client.from('teams').select();
  return checkError(resp);
};

export const fetchTeamsById = async (id) => {
  const resp = await client.from('teams').select('*, players(*)').match({ id }).single();
  return checkError(resp);
};
