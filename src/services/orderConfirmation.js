import { api } from '@/services/axios';

export const getOrderConfirmationList = async ({ currentPage, perPage, filter }) => {
  const res = await api.get(`/ecommercewa/api/v1/order/confirmation/upload?sort=&page=${currentPage}&per_page=${perPage}&filter=${filter}`);
  return res.data;
};

export const deleteOrderConfirmation = async (id) => {
  const res = await api.delete(`/ecommercewa/api/v1/order/confirmation/upload/${id}`);
  return res.data;
};

export const getCallFlows = async () => {
  const res = await api.get('/ecommercewa/api/v1/customer/call-flows');
  return res.data;
};

export const getTypes = async () => {
  const res = await api.get('/ecommercewa/api/v1/order/confirmation/upload/template/types');
  return res.data;
};

export const getCallerIds = async () => {
  const res = await api.get('/billing/api/v3/did/search');
  return res.data;
};

export const getSampleSheet = async (templateType) => {
  const res = await api.get(`/ecommercewa/api/v1/order/confirmation/upload/template?templateType=${templateType}`, {
    responseType: 'arraybuffer',
  });

  return res;
};

export const createOrderConfirmation = async (data) => {
  const res = await api.post('/ecommercewa/api/v1/order/confirmation/upload', data);
  return res.data;
};
