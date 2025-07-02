import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useLoginFormValidation() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const isFormValid = isEmailValid && isPasswordValid;

  const handleEmailValidityChange = (valid: boolean) => {
    setIsEmailValid(valid);
  };

  const handlePasswordValidityChange = (valid: boolean) => {
    setIsPasswordValid(valid);
  };

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return {
    isFormValid,
    handleEmailValidityChange,
    handlePasswordValidityChange,
    handleLogin,
  };
}
