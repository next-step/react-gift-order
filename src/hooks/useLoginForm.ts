import { useInput } from "./useInput";
import { useLoginContext } from "../contexts/LoginContext";

interface UseLoginFormOptions {
  onSuccess?: () => void;
}

export function useLoginForm(options?: UseLoginFormOptions) {
  const { login } = useLoginContext();
  const validateEmail = (value: string) => {
    if (!value) return "ID를 입력해주세요.";
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value) return "PW를 입력해주세요.";
    if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
    return "";
  };

  const emailInput = useInput("", validateEmail);
  const passwordInput = useInput("", validatePassword);

  const isFormValid = 
    validateEmail(emailInput.value) === "" && 
    validatePassword(passwordInput.value) === "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormValid) {
      // 1. Context에 로그인 정보 저장
      login({ email: emailInput.value });
      // 2. 그 후에 onSuccess(navigate) 실행
      if (options && options.onSuccess) {
        options.onSuccess();
      }
    }
  };

  return {
    email: emailInput.value,
    emailError: emailInput.error,
    handleEmailChange: emailInput.handleChange,
    handleEmailBlur: emailInput.handleBlur,
    
    password: passwordInput.value,
    passwordError: passwordInput.error,
    handlePasswordChange: passwordInput.handleChange,
    handlePasswordBlur: passwordInput.handleBlur,
    
    isFormValid,
    handleSubmit,
  };
} 