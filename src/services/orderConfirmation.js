import { api } from '@/services/axios';

export const getOrderConfirmationList = async ({ currentPage, perPage, filter }) => {
  const res = await api.get(`/ecommercewa/api/v1/order/confirmation/upload?sort=&page=${currentPage}&per_page=${perPage}&filter=${filter}`);
  return res.data;
};

export const deleteOrderConfirmation = async (id) => {
  const res = await api.delete(`/ecommercewa/api/v1/order/confirmation/upload/${id}`);
  return res.data;
};
