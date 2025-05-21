import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!username || !password) return;
    onLogin(username); // Se simula login o registro
  };

  return (
    <div id="login-modal" className="uk-modal uk-open blog-login-display">
      <div className="uk-modal-dialog uk-modal-body blog-login-container">
        <button
          className="uk-modal-close-default color-text-black"
          type="button"
          onClick={onClose}
          data-uk-close
        ></button>
        <h2 className="uk-modal-title color-text-black">
          {isRegistering ? "Registrarse" : "Iniciar Sesión"}
        </h2>

        <form className="uk-form-stacked" onSubmit={(e) => e.preventDefault()}>
          <div className="uk-margin">
            <label className="uk-form-label color-text-black">Usuario</label>
            <input
              className="uk-input blog-login-input"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label color-text-black">Contraseña</label>
            <input
              className="uk-input blog-login-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="uk-flex uk-flex-between">
            <button
              className="uk-button uk-button-primary blog-container-round"
              type="button"
              onClick={handleSubmit}
            >
              {isRegistering ? "Registrarse" : "Iniciar Sesión"}
            </button>
            <button
              className="uk-button uk-button-link"
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
