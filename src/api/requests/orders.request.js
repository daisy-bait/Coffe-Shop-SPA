import axiosInstance from "../axios.instance";

export const createOrderRequest = async (order) =>
  axiosInstance.post("/orders/create", order);

export const searchOrdersRequest = async (requestParams) =>
  axiosInstance.get("/orders/search", { params: requestParams });

export const getOrderRequest = async (orderId) =>
  axiosInstance.get(`/orders/${orderId}`);

export const updateOrderStatusRequest = async (orderId, statusData) =>
  axiosInstance.patch(`/orders/update-status/${orderId}`, statusData);

export const deleteOrderRequest = async (orderId) =>
  axiosInstance.delete(`/orders/${orderId}`);
