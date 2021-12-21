export default {
  state: {
    lang: process.env.VUE_APP_I18N_LOCALE,
    dir: process.env.VUE_APP_I18N_DIR,
    sidebarOpen: true,
  },
  getters: {
    dir: (state) => state.dir,
    lang: (state) => state.lang,
    sidebarOpen: (state) => state.sidebarOpen,
  },
  mutations: {
    dir: (state, dir) => {
      state.dir = dir;
    },
    lang: (state, lang) => {
      state.lang = lang;
    },
    sidebarOpen: (state, status) => {
      state.sidebarOpen = status;
    },
  },
  actions: {
    setDir: ({ commit }, dir) => {
      commit('dir', dir);
    },
    setLang: ({ commit }, lang) => {
      commit('lang', lang);
    },
    toggleSidebarOpen: ({ commit, state }) => {
      commit('sidebarOpen', !state.sidebarOpen);
    },
  },
};
