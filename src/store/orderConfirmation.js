import {
  deleteOrderConfirmation, getCallerIds, getCallFlows, getOrderConfirmationList, getTypes,
} from '@/services/orderConfirmation';

export default {
  state: {
    orderConfirmationList: null,
    currentPage: 1,
    perPage: 10,
    filter: '',
    callFlows: null,
    types: null,
    callerIds: null,
  },
  getters: {
    orderConfirmationList: (state) => state.orderConfirmationList,
    currentPage: (state) => state.currentPage,
    perPage: (state) => state.perPage,
    filter: (state) => state.filter,
    callFlows: (state) => state.callFlows,
    types: (state) => state.types,
    callerIds: (state) => state.callerIds,
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
    callFlows: (state, callFlows) => {
      state.callFlows = callFlows;
    },
    types: (state, types) => {
      state.types = types;
    },
    callerIds: (state, callerIds) => {
      state.callerIds = callerIds;
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
    fetchCallFlows: async ({ commit }) => {
      const callFlows = await getCallFlows();
      commit('callFlows', callFlows);
    },
    fetchTypes: async ({ commit }) => {
      const types = await getTypes();
      commit('types', types);
    },
    fetchCallerIds: async ({ commit }) => {
      const callerIds = await getCallerIds();
      commit('callerIds', callerIds);
    },
  },
};
