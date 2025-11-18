import { useState } from "react";

const StepResetPasswod = ({
  next,
  email,
  code,
  action,
  errors,
  setErrors,
  loading,
  setLoading,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    setErrors([]);
    setLoading(true);
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrors(["Las contraseñas no coinciden"]);
    } else {
      const res = await action(email, code, newPassword);
      if (res) {
      if (window.UIkit) {
        window.UIkit.notification({
          message: `Contraseña Actualizada con éxito`,
          status: "success",
          pos: "top-center",
        });
      }
        next();
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Crear Nueva Contraseña</h2>
      <p>
        Ingresa el código enviado a <strong>{email}</strong>.
      </p>

      <input
        type="password"
        className="uk-width-1-1"
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <input
        type="password"
        className="uk-width-1-1"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
        {errors.map((error) => (
          <p className="uk-text-danger uk-margin-remove-top">{error}</p>
        ))}
      {!loading ? (
        <button className="uk-width-1-1 btn-golden-primary" type="submit">
          Actualizar Contraseña
        </button>
      ) : (
        <p>Cargando...</p>
      )}
    </form>
  );
};

export default StepResetPasswod;
