import axios from 'axios';
import router from '@/router/index';

const token = localStorage.getItem('token');
const options = {
  baseURL: `${process.env.VUE_APP_BASE_URL}/customer`,
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
  baseURL: `${process.env.VUE_APP_BASE_URL}/customer/sip/provisioningwa`,
};

const createInstance = (opts) => {
  const instance = axios.create(opts);

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response.status === 403
        || error.response.data.message === 'Auth guard [verified] is not defined.'
      ) {
        router.push('/login');
      }
    },
  );

  return instance;
};

const api = createInstance(options);
const sip = createInstance(sipOptions);
const auth = createInstance(authOptions);

export {
  axios, api, auth, sip,
};
