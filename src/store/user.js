export default {
  state: {
    authLoading: false,
  },
  getters: {
    isauthLoading: (state) => state.authLoading,
  },
  mutations: {
    authLoading: (state, loading) => {
      state.authLoading = loading;
    },
  },
  actions: {
    setLoading: ({ commit }, loading) => {
      commit('authLoading', loading);
    },
  },
};
