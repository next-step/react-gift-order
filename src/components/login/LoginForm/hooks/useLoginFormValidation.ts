import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useLoginFormValidation() {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = () => {
    const from = location.state?.from?.pathname || "/";
    auth.login(email);
    navigate(from, { replace: true });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isFormValid,
    setIsEmailValid,
    setIsPasswordValid,
    handleLogin,
  };
}
