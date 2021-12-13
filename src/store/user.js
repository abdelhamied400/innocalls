import user from '@/services/user';

export default {
  state: {
    authLoading: false,
    auth: null,
    resetEmail: null,
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
    resetEmail: (state, email) => {
      state.resetEmail = email;
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
    signup: async (_, data) => {
      await user.signup(data);
    },
    forgetPassword: async ({ commit }, data) => {
      await user.forgetPassword(data);
      commit('resetEmail', data.email);
    },
    otpCheck: async ({ state }, otp) => {
      await user.otpCheck({ pin_code: otp, email: state.resetEmail });
    },
  },
};
