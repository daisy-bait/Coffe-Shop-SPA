import axiosInstance from "../axios.instance";

export const createOrderRequest = async (order) =>
  axiosInstance.post("/orders/create", order);

export const modifyOrderStatusRequest = async(order) =>
  axiosInstance.patch("/orders/modify/status", order);

export const searchOrdersRequest = async (requestParams) =>
  axiosInstance.get("/orders/search", {params: requestParams});