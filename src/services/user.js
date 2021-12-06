import { auth, api } from '@/services/axios';

export default {
  isAuth: async () => {
    try {
      const res = await api.get('customer/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.data.success;
    } catch (error) {
      return false;
    }
  },
  login: async (credentials) => {
    const res = await auth.post('/oauth/token', {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      grant_type: process.env.VUE_APP_GRANT_TYPE,
      username: {
        name: credentials.username,
        ser: process.env.VUE_APP_SERVICE_PROVIDER,
      },
      password: credentials.password,
    });
    return res.data;
  },
};