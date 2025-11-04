import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showLoginOrRegisterModal, setShowLoginOrRegisterModal] = useState(false);
  const [mode, setMode] = useState("login");

  const openRefresh = () => {
    setMode("refresh");
    setShowLoginOrRegisterModal(true);
  }

  const openLogin = () => {
    setMode("login");
    setShowLoginOrRegisterModal(true);
  };

  const openRegister = () => {
    setMode("register");
    setShowLoginOrRegisterModal(true);
  };

  const closeModal = () => {
    setShowLoginOrRegisterModal(false);
  };

  return (
    <LoginContext.Provider
      value={{
        showLoginOrRegisterModal,
        mode,
        openLogin,
        openRegister,
        openRefresh,
        closeModal,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);