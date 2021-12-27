import { createStore } from 'vuex';
import user from './user';
import meta from './meta';
import stats from './stats';

export default createStore({
  modules: {
    user,
    meta,
    stats,
  },
});
