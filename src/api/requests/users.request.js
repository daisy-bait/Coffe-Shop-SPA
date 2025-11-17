import axiosInstance from "../axios.instance";

// Autenticación
export const loginRequest = async (login) =>
  axiosInstance.post("/users/login", login);

export const registerRequest = async (user) =>
  axiosInstance.post("/users/register", user);

export const modifyUserRequest = async (userId, userData) =>
  axiosInstance.put(`/users/modify/${userId}`, userData);

export const verifyToken = async () =>
  axiosInstance.get("/users/verify-session");

// Administración de usuarios
export const searchUsersRequest = async (requestParams) =>
  axiosInstance.get("/users/search", { params: requestParams });

export const activateUserRequest = async (userId) =>
  axiosInstance.patch(`/users/activate/${userId}`);

export const disableUserRequest = async (userId) =>
  axiosInstance.delete(`/users/disable/${userId}`);

// Verificaciones de Usuario
export const requestVerificationCodeRequest = async (requestData) =>
  axiosInstance.post("/users/request-code", requestData);

export const verifyCodeRequest = async (verificationData) =>
  axiosInstance.post("/users/verify-code", verificationData);

export const resetPasswordRequest = async (recoveryData) =>
  axiosInstance.post("/users/reset-password", recoveryData);

export const confirmRegisterRequest = async (confirmationData) =>
  axiosInstance.post("/users/confirm-email", confirmationData);