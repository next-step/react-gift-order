import { buttonStyle } from "./style.ts";
import EmailInput from "./EmailInput/index.tsx";
import PasswordInput from "./PasswordInput/index.tsx";
import useLoginFormValidation from "./hooks/useLoginFormValidation.ts";

export default function LoginForm() {
  const {
    isFormValid,
    setIsEmailValid,
    setIsPasswordValid,
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
  } = useLoginFormValidation();

  return (
    <>
      <EmailInput
        value={email}
        onChange={setEmail}
        onValidityChange={setIsEmailValid}
      />
      <PasswordInput
        value={password}
        onChange={setPassword}
        onValidityChange={setIsPasswordValid}
      />
      <button onClick={handleLogin} css={buttonStyle} disabled={!isFormValid}>
        로그인
      </button>
    </>
  );
}
