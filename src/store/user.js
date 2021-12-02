import user from '@/services/user';

export default {
  state: {
    authLoading: false,
    auth: null,
  },
  getters: {
    isauthLoading: (state) => state.authLoading,
    auth: (state) => state.auth,
  },
  mutations: {
    authLoading: (state, loading) => {
      state.authLoading = loading;
    },
    auth: (state, payload) => {
      state.auth = payload;
    },
  },
  actions: {
    setLoading: ({ commit }, loading) => {
      commit('authLoading', loading);
    },
    login: async ({ commit }, credentials) => {
      const data = await user.login(credentials);
      commit('auth', data);
      localStorage.setItem('token', data?.access_token);
    },
  },
};
