import { createStore } from 'vuex';
import user from './user';
import meta from './meta';
import stats from './stats';
import orderConfirmation from './orderConfirmation';

export default createStore({
  modules: {
    user,
    meta,
    stats,
    orderConfirmation,
  },
});
