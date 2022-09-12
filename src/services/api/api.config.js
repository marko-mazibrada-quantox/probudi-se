import { createAxiosInstance } from "./api.utils";

import { TOKEN } from "utils/storage.constants";

const client = createAxiosInstance({ baseURL: process.env.REACT_APP_API_URL });

client.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem(TOKEN);

    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default client;

// const axiosInstance = (token: string) => {
//   const client = axios.create();

//   // request interceptor for adding token
//   axiosInstance.interceptors.request.use(config => {
//     // add token to request headers
//     config.headers.Authorization = token;
//     return config;
//   });

//   return axiosInstance;
// };

// // logic to get token from state (it may vary from your approach but the idea is same)
// const token = useLocalStorage(token => token);

// axios(token).get('/url');
// axios(token).post('/url', { message: 'hello' });
