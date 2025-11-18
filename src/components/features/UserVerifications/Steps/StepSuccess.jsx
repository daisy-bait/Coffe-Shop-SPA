import { useNavigate } from "react-router";
import { useLogin } from "../../../../context/LoginContext";

const StepSuccess = ({ mode }) => {
  const navigate = useNavigate();
  const { openLogin } = useLogin();

  return (
    <div className="success-box">
      <h1>
        {mode === "confirm-email"
          ? "Correo Confirmado"
          : "Contraseña Actualizada"}
      </h1>
      <p>
        {mode === "confirm-email"
          ? "Tu Correo ha sido Verificado Exitosamente"
          : "Tu Contraseña ha sido Actualizada exitosamente"}
      </p>

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
