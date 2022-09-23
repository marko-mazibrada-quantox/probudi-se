/* eslint-disable no-return-assign */
import Axios from 'axios';

export const createAxiosInstance = config => Axios.create(config);

let getAccessTokenSilently = null;

export const security = {
  getAccessTokenSilently: () => getAccessTokenSilently,
  setAccessTokenSilently: fn => (getAccessTokenSilently = fn)
};
