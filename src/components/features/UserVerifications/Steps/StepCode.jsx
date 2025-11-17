const StepCode = ({
  next,
  email,
  code,
  setCode,
  action,
  errors,
  setErrors,
  loading,
  setLoading,
}) => {
  const handleSubmit = async (e) => {
    setErrors([]);
    setLoading(true);
    e.preventDefault();
    const res = await action(email, code);
    if (res) {
      next();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Verificación</h2>
      <p>
        Ingresa el código enviado a <strong>{email}</strong>.
      </p>

      <input
        type="text"
        placeholder="Código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      {errors && errors.map((error) => <>{error}</>)}

      {!loading ? (
        <button className="uk-button btn-golden-primary" type="submit">
          Verificar Código
        </button>
      ) : (
        <p>Cargando...</p>
      )}
    </form>
  );
};

export default StepCode;
