import { sip } from '@/services/axios';

export default {
  getCallDistribution: async (tenantId) => {
    const res = await sip.get(`/api/v2/tenant/statistics/calls-distribution?tenant_id=${tenantId}`);
    return res.data.data.callDistribution;
  },
  getTotalCalls: async (tenantId) => {
    const res = await sip.get(`/api/v2/tenant/statistics/tenant-calls?tenant_id=${tenantId}`);
    return res.data.data.totalCalls;
  },
  getVoiceMails: async (tenantId) => {
    const res = await sip.get(`/api/v2/tenant/statistics/tenant-voice-mails?tenant_id=${tenantId}`);
    return res.data.data.voiceMail;
  },
  getExtensions: async (tenantId) => {
    const res = await sip.get(`/api/v2/tenant/extension/list?tenant_id=${tenantId}`);
    return res.data.data;
  },
  getCallAverageDuration: async (tenantId) => {
    const res = await sip.get(`/api/v2/tenant/statistics/calls-average-duration?tenant_id=${tenantId}`);

    return res.data.data.averageDuration;
  },
};
