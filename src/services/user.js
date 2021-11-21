import { api } from './axios';

export default {
  isAuth: async () => {
    const res = await api.get('customers/customer/me');
    console.log(res.data);
  },
};
