import { deleteOrderConfirmation, getOrderConfirmationList } from '@/services/orderConfirmation';

export default {
  state: {
    orderConfirmationList: null,
    currentPage: 1,
  },
  getters: {
    orderConfirmationList: (state) => state.orderConfirmationList,
    currentPage: (state) => state.currentPage,
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
    setCurrentPage: (state, page) => {
      state.currentPage = page;
    },
  },
  actions: {
    fetchOrderConfirmationList: async ({ commit, state }) => {
      commit('resetOrderConfirmationList');
      const orderConfirmationList = await getOrderConfirmationList(
        state.currentPage,
      );
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
      commit('setCurrentPage', page);
    },
  },
};
