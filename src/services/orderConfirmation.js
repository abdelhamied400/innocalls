import { api } from '@/services/axios';

export const getOrderConfirmationList = async (page) => {
  const res = await api.get(`/ecommercewa/api/v1/order/confirmation/upload?sort=&page=${page}&per_page=10&filter=`);
  return res.data;
};

export const deleteOrderConfirmation = async (id) => {
  const res = await api.delete(`/ecommercewa/api/v1/order/confirmation/upload/${id}`);
  return res.data;
};
