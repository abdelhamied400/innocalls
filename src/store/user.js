import user from '@/services/user';

export default {
  state: {
    authLoading: false,
    auth: null,
    resetEmail: null,
    otp: null,
    user: null,
    tenant: null,
  },
  getters: {
    isauthLoading: (state) => state.authLoading,
    auth: (state) => state.auth,
    user: (state) => state.user,
    tenant: (state) => state.tenant,
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
    otp: (state, otp) => {
      state.otp = otp;
    },
    user: (state, userData) => {
      state.user = userData;
    },
    tenant: (state, tenant) => {
      state.tenant = tenant;
    },
  },
  actions: {
    setLoading: ({ commit }, loading) => {
      commit('authLoading', loading);
    },
    auth: async ({ commit }) => {
      const data = await user.auth();
      commit('user', data);
      commit('tenant', data?.tenantList?.[0]);
    },
    login: async ({ commit }, credentials) => {
      const data = await user.login(credentials);
      commit('auth', data);
      localStorage.setItem('token', data?.access_token);
      const auth = await user.auth(data?.access_token);
      commit('user', auth);
      commit('tenant', auth?.tenantList?.[0]);
    },
    signup: async (_, data) => {
      await user.signup(data);
    },
    forgetPassword: async ({ commit }, data) => {
      await user.forgetPassword(data);
      commit('resetEmail', data.email);
    },
    otpCheck: async ({ state, commit }, otp) => {
      await user.otpCheck({ pin_code: otp, email: state.resetEmail });
      commit('otp', otp);
    },
    resetPassword: async ({ state, commit }, password) => {
      await user.resetPassword({
        email: state.resetEmail,
        password,
        password_confirmation: password,
        pin_code: state.otp,
      });
      commit('resetEmail', null);
      commit('otp', null);
    },
    changeTenant: ({ commit }, tenant) => {
      commit('tenant', tenant);
    },
  },
};
