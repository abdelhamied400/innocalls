import axios from 'axios';

const token = localStorage.getItem('token');
const options = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

const authOptions = {
  ...options,
  baseURL: process.env.VUE_APP_AUTH_URL,
};

const api = axios.create(options);
const auth = axios.create(authOptions);

export { axios, api, auth };
