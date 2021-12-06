import { createStore } from 'vuex';
import user from './user';
import meta from './meta';

export default createStore({
  modules: {
    user,
    meta,
  },
});
