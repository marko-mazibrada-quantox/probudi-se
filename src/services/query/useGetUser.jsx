import { useQuery } from 'react-query';

import client from 'services/api/api.config';

const getUser = async () => client.get('/users/1');

export const useGetUser = () => useQuery('user', getUser, { select: data => data.data });
