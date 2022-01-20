import { deleteOrderConfirmation, getOrderConfirmationList } from '@/services/orderConfirmation';

export default {
  state: {
    orderConfirmationList: null,
    currentPage: 1,
    perPage: 10,
    filter: '',
  },
  getters: {
    orderConfirmationList: (state) => state.orderConfirmationList,
    currentPage: (state) => state.currentPage,
    perPage: (state) => state.perPage,
    filter: (state) => state.filter,
  },
  mutations: {
    orderConfirmationList: (state, list) => {
      state.orderConfirmationList = list;
    },
    removeOrderConfirmation: (state, id) => {
      state.orderConfirmationList = {
        ...state.orderConfirmationList,
        data: state.orderConfirmationList?.data.filter((oc) => oc.id !== id),
      };
    },
    resetOrderConfirmationList: (state) => {
      state.orderConfirmationList = null;
    },
    currentPage: (state, page) => {
      state.currentPage = page;
    },
    perPage: (state, perPage) => {
      state.perPage = perPage;
    },
    filter: (state, filter) => {
      state.filter = filter;
    },
  },
  actions: {
    fetchOrderConfirmationList: async ({ commit, state }) => {
      commit('resetOrderConfirmationList');
      const orderConfirmationList = await getOrderConfirmationList(state);
      commit('orderConfirmationList', orderConfirmationList);
    },
    resetOrderConfirmationList: async ({ commit }) => {
      commit('resetOrderConfirmationList');
    },
    removeOrderConfirmation: async ({ commit }, id) => {
      await deleteOrderConfirmation(id);
      commit('removeOrderConfirmation', id);
    },
    setCurrentPage: async ({ commit }, page) => {
      commit('currentPage', page);
    },
    setPerPage: async ({ commit }, perPage) => {
      commit('perPage', perPage);
    },
    setFilter: async ({ commit }, filter) => {
      commit('filter', filter);
    },
  },
};
