import { createContext, useContext, useState } from "react";
import {
  activateUserRequest,
  confirmRegisterRequest,
  disableUserRequest,
  requestVerificationCodeRequest,
  resetPasswordRequest,
  searchUsersRequest,
  verifyCodeRequest,
} from "../api/requests/users.request";

const UsersContext = createContext();

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("useUsers must be used within a UsersProvider");
  return context;
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [modifiedUsers, setModifiedUsers] = useState(false);
  const [errors, setErrors] = useState([]);

  // Buscar todos los usuarios
  const searchUsers = async (params) => {
    try {
      const res = await searchUsersRequest(params);
      if (res.status === 200 && res.data) {
        setUsers(res.data);
        return true;
      }
    } catch (error) {
      console.error(error);
      setErrors([error.response?.data?.message || "Error al buscar usuarios"]);
      return false;
    }
  };

  const modifyUserStatus = async (userId, enabled) => {
    try {
      let res;
      if (enabled) {
        res = await activateUserRequest(userId);
      } else {
        res = await disableUserRequest(userId);
      }
      if (res.status === 200 || res.status === 204) {
        setModifiedUsers(true);
        return true;
      }
    } catch (error) {
      console.error(error);
      setErrors([error.response?.data?.message || "Error al modificar el estado del usuario"]);
    }
  };

  // Verification Requests
  const requestUserCode = async (email) => {
    try {
      const res = await requestVerificationCodeRequest({
        email: email
      });
      if (res.status === 200) {
        return true;
      } else {
        setErrors([res.data?.message || "Error generando código de verificación"])
        return false;
      }
    } catch (error) {
      console.error(error);
      setErrors([error.response?.data?.message || "Error generando código de verificación"])
      return false;
    }
  }

  const verifyUserCode = async (email, code) => {
    try {
      const res = await verifyCodeRequest({
        email: email,
        code: code
      });
      console.log(res);
      if (res.status === 200) {
        return true;
      } else {
        setErrors([res.data?.message || "Error verificando el código"])
        return false;
      }
    } catch (error) {
      console.error(error);
      setErrors([error.response?.data?.message || "Error verificando el código"])
      return false;
    }
  }

  const resetPassword = async (email, code, newPassword) => {
    try {
      const res = await resetPasswordRequest({
        email: email,
        code: code,
        newPassword: newPassword,
      });
      if (res.status === 200) {
        return true;
      } else {
        setErrors([res.data?.message || "Error reestableciendo la contraseña"])
        return false;
      }
    } catch (error) {
      console.error(error);
      setErrors([error.response?.data?.message || "Error restableciendo la contraseña"])
      return false;
    }
  }

  const confirmEmailRegister = async (email, code) => {
    try {
      const res = await confirmRegisterRequest({
        email: email,
        code: code,
      });
      if (res.status === 200) {
        return true;
      } else {
        setErrors([res.data?.message || "Error confirmando el correo electrónico"])
        return false;
      }
    } catch (error) {
      console.error(error);
      setErrors([error.response?.data?.message || "Error confirmando el correo electrónico"])
      return false;
    }
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        errors,
        modifiedUsers,
        searchUsers,
        setModifiedUsers,
        setErrors,
        modifyUserStatus,
        requestUserCode,
        verifyUserCode,
        resetPassword,
        confirmEmailRegister,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
