const StepCode = ({
  next,
  email,
  code,
  setCode,
  action,
  retry,
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
      if (window.UIkit) {
        window.UIkit.notification({
          message: `Código verificado con éxito`,
          status: "success",
          pos: "top-center",
        });
      }
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
        className="uk-width-1-1"
        placeholder="Código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      {errors &&
        errors.map((error) => (
          <p className="uk-text-danger uk-margin-remove-top">{error}</p>
        ))}

      {!loading ? (
        <div className="uk-flex uk-flex-center">
          <button
            className="uk-width-1-3@s uk-margin-right uk-width-1-1 btn-golden-primary"
            type="submit"
          >
            Verificar Código
          </button>
          <button
            className="uk-width-1-3@s uk-margin-left uk-width-1-1 btn-golden-primary"
            onClick={() => {
              retry();
              if (window.UIkit) {
                window.UIkit.notification({
                  message: `Código reenviado al correo <strong>${email}</strong>.`,
                  status: "success",
                  pos: "top-center",
                });
              }
              setErrors([]);
            }}
          >
            Reenviar Código
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </form>
  );
};

export default StepCode;
