import store from '@/store/index';
import { api } from './axios';

export default {
  isAuth: async () => {
    try {
      store.commit('authLoading', true);
      const res = await api.get('customers/customer/me');
      return res.data.success;
    } catch (error) {
      return false;
    }
  },
};
