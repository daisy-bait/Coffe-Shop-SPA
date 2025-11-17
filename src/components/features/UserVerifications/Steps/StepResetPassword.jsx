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
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {!loading ? (
        <button className="uk-button btn-golden-primary" type="submit">
          Actualizar Contraseña
        </button>
      ) : (
        <p>Cargando...</p>
      )}
      {errors && errors.map((error) => <>{error}</>)}
    </form>
  );
};

export default StepResetPasswod;
