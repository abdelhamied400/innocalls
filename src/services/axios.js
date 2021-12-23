import axios from 'axios';

const token = localStorage.getItem('token');
const options = {
  baseURL: `${process.env.VUE_APP_BASE_URL}/customer/api/v1/customers`,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

const authOptions = {
  ...options,
  baseURL: `${process.env.VUE_APP_BASE_URL}/auth/customer`,
};

const sipOptions = {
  ...options,
  baseURL: `${process.env.VUE_APP_BASE_URL}/sip/provisioningwa`,
};

const api = axios.create(options);
const sip = axios.create(sipOptions);
const auth = axios.create(authOptions);

export {
  axios, api, auth, sip,
};
