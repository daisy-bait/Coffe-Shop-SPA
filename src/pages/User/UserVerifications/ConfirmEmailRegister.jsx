import { useEffect, useState } from "react";
import "./UserVerifications.css";
import { useUsers } from "../../../context/UsersContext";
import StepCode from "../../../components/features/UserVerifications/Steps/StepCode";
import StepSuccess from "../../../components/features/UserVerifications/Steps/StepSuccess";
import { useLocation, useNavigate } from "react-router";

const ConfirmEmailRegister = () => {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { errors, setErrors, requestUserCode, verifyUserCode } = useUsers();

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const next = () => setStep((old) => old + 1);

  useEffect(() => {
    if (!email) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <div className="uk-section first-child-adjustment uk-background-secondary uk-light uk-padding-small">
      <div className="uk-container uk-container-xlarge uk-padding-small">
        <h2 className="uk-heading-line uk-text-center">
          <span>Confirmar Correo electrónico</span>
        </h2>
        <div className="uk-margin-medium-bottom uk-flex uk-flex-center">
          <div className="recovery-card">
            {step === 0 && (
              <StepCode
                next={next}
                email={email}
                code={code}
                setCode={setCode}
                action={(email, code) => verifyUserCode(email, code)}
                mode={"confirm-email"}
                retry={() => requestUserCode(email)}
                errors={errors}
                setErrors={setErrors}
                loading={loading}
                setLoading={setLoading}
              />
            )}
            {step === 1 && <StepSuccess mode={"confirm-email"} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailRegister;
