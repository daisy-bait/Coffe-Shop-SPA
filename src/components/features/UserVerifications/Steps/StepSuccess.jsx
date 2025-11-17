import { useNavigate } from "react-router";
import { useLogin } from "../../../../context/LoginContext";

const StepSuccess = () => {
  const navigate = useNavigate();
  const { openLogin } = useLogin();

  return (
    <div className="success-box">
      <h1>Contraseña Actualizada</h1>
      <p>Tu contraseña ha sido cambiada exitosamente.</p>

      <button
        className="uk-button btn-golden-primary"
        onClick={() => {
          navigate("/");
          openLogin();
        }}
      >
        Volver a Iniciar Sesión
      </button>
    </div>
  );
};

export default StepSuccess;
