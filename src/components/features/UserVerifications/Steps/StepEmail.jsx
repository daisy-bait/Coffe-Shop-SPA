import { useState } from "react";

const StepEmail = ({
  next,
  setEmail,
  action,
  errors,
  setErrors,
  loading,
  setLoading,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    setErrors([]);
    setLoading(true);
    e.preventDefault();
    const res = await action(input);
    if (res) {
      setEmail(input);
      next();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Recuperar Contraseña</h2>
      <p>Ingresa tu correo para enviarte un código de verificación.</p>

      <input
        type="email"
        className="uk-width-1-1"
        placeholder="Correo electrónico"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      {errors &&
        errors.map((error) => (
          <p className="uk-text-danger uk-margin-remove-top">{error}</p>
        ))}

      {!loading ? (
        <button className="uk-width-1-1 btn-golden-primary" type="submit">
          Enviar Código
        </button>
      ) : (
        <p>Cargando...</p>
      )}
    </form>
  );
};

export default StepEmail;
