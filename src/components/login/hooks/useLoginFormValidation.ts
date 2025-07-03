import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useLoginFormValidation() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    email,
    setEmail,
    password,
    setPassword,
    isFormValid,
    handleEmailValidityChange,
    handlePasswordValidityChange,
    handleLogin,
  };
}
