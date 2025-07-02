import { buttonStyle } from "./style.ts";
import EmailInput from "./EmailInput/index.tsx";
import PasswordInput from "./PasswordInput/index.tsx";
import useLoginFormValidation from "../../../hooks/useLoginFormValidation";

export default function LoginForm() {
  const {
    isFormValid,
    handleEmailValidityChange,
    handlePasswordValidityChange,
    handleLogin,
  } = useLoginFormValidation();

  return (
    <>
      <EmailInput onValidityChange={handleEmailValidityChange} />
      <PasswordInput onValidityChange={handlePasswordValidityChange} />
      <button onClick={handleLogin} css={buttonStyle} disabled={!isFormValid}>
        로그인
      </button>
    </>
  );
}
