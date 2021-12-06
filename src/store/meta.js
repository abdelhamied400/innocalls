export default {
  state: {
    lang: process.env.VUE_APP_I18N_LOCALE,
    dir: process.env.VUE_APP_I18N_DIR,
  },
  getters: {
    dir: (state) => state.dir,
    lang: (state) => state.lang,
  },
  mutations: {
    dir: (state, dir) => {
      state.dir = dir;
    },
    lang: (state, lang) => {
      state.lang = lang;
    },
  },
  actions: {
    setDir: ({ commit }, dir) => {
      commit('dir', dir);
    },
    setLang: ({ commit }, lang) => {
      commit('lang', lang);
    },
  },
};
