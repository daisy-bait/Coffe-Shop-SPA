import "./Breadcrumb.css";

const steps = ["Correo", "Código", "Nueva Contraseña"];

const Breadcrumb = ({ current }) => {
  return (
    <div className="breadcrumb-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`breadcrumb-step ${index === current ? "active" : ""} ${
            index < current ? "completed" : ""
          }`}
        >
          <div
            className={`uk-icon-button uk-margin-small-right step-badge ${index === current ? 'active-step' : 'inactive-step'}`}
            uk-tooltip={`${index === 0 ? 'Solicitar Correo' : index === 1 ? 'Verificar Código' : 'Reestablecer contraseña'}`}
            uk-icon={`${index === 0 ? 'mail' : index === 1 ? 'eye' : 'lock'}`}
          />
          <span>{step}</span>
          {index !== steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
