import { createAxiosInstance, security } from './api.utils';

// const client = createAxiosInstance({ baseURL: process.env.REACT_APP_API_URL });
const client = createAxiosInstance({ baseURL: 'https://jsonplaceholder.typicode.com' });

client.interceptors.request.use(
  async req => {
    const token = await security.getAccessTokenSilently()();
    if (token) req.headers.Authorization = `Bearer ${token}`;

    return req;
  },
  error => {
    Promise.reject(error);
  }
);

export default client;
