import { auth, api } from '@/services/axios';

export default {
  auth: async () => {
    try {
      const res = await api.get('customer/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.data;
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
  signup: async (data) => {
    const res = await auth.post('/api/v1/customer/register', {
      ...data,
      service_provider_uuid: process.env.VUE_APP_SERVICE_PROVIDER,
    });
    return res.data;
  },
  forgetPassword: async (data) => {
    const res = await auth.post('/api/v1/customer/password/reset', {
      ...data,
    });
    return res.data;
  },
  otpCheck: async (data) => {
    const res = await auth.post('/api/v1/customer/pin/checker', {
      ...data,
    });
    return res.data;
  },
  resetPassword: async (data) => {
    const res = await auth.post('/api/v1/customer/password/change', {
      ...data,
    });
    return res.data;
  },
};
