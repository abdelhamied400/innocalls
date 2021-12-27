import stats from '@/services/stats';
import { randomColor } from '@/utils/color';

export default {
  state: {
    callDistribution: {},
    totalCalls: {},
    voiceMails: {},
    totalExtensions: {},
  },
  getters: {
    callDistribution: (state) => state.callDistribution,
    totalCalls: (state) => state.totalCalls,
    voiceMails: (state) => state.voiceMails,
    totalExtensions: (state) => state.totalExtensions,
  },
  mutations: {
    callDistribution: (state, data) => {
      state.callDistribution = data;
    },
    totalCalls: (state, data) => {
      state.totalCalls = data;
    },
    voiceMails: (state, data) => {
      state.voiceMails = data;
    },
    totalExtensions: (state, data) => {
      state.totalExtensions = data;
    },
  },
  actions: {
    fetchCallDistribution: async ({ commit, rootState }) => {
      const data = {};
      const colors = ['#2F8FCFd9', '#0D4D80d9'];
      const callDistribution = await stats.getCallDistribution(rootState.user.tenant.id);
      const callDistributionDatasets = Object.keys(callDistribution).map((key, idx) => ({
        label: key,
        data: callDistribution[key].values,
        fill: true,
        backgroundColor: colors[idx],
        borderColor: 'transparent',
        tension: 0.4,
      }));

      data.labels = callDistribution.incoming.labels;
      data.datasets = callDistributionDatasets;
      commit('callDistribution', data);
    },
    fetchTotalCalls: async ({ commit, rootState }) => {
      const totalCalls = await stats.getTotalCalls(rootState.user.tenant.id);
      const data = {
        labels: totalCalls.labels,
        datasets: [
          {
            data: totalCalls.values,
            backgroundColor: Array.from({ length: totalCalls.values.length }, randomColor),
          },
        ],
      };
      commit('totalCalls', data);
    },
    fetchVoiceMails: async ({ commit, rootState }) => {
      const voiceMails = await stats.getVoiceMails(rootState.user.tenant.id);
      const data = {
        labels: voiceMails.labels,
        datasets: [
          {
            data: voiceMails.values,
            backgroundColor: Array.from({ length: voiceMails.values.length }, randomColor),
          },
        ],
      };
      commit('voiceMails', data);
    },
    fetchExtensions: async ({ commit, rootState }) => {
      const extensions = await stats.getExtensions(rootState.user.tenant.id);
      console.log(extensions.length);
      const data = {
        labels: ['extensions'],
        datasets: [
          {
            data: [extensions.length],
            backgroundColor: randomColor(),
          },
        ],
      };
      commit('totalExtensions', data);
    },
  },
};
