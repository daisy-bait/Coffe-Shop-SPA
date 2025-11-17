import { createContext, useContext, useState } from "react";
import {
  searchUsersRequest,
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

  return (
    <UsersContext.Provider
      value={{
        users,
        errors,
        modifiedUsers,
        searchUsers,
        setModifiedUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
