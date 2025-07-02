import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
  isValidEmail,
  isValidPassword,
} from '@/utils';

interface UseLoginFormReturn {
  email: string;
  password: string;
  emailError: string | null;
  passwordError: string | null;
  isFormValid: boolean;
  handleEmailChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
  handleEmailBlur: () => void;
  handlePasswordBlur: () => void;
  handleLogin: () => void;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleEmailBlur = () => {
    const errorMessage = getEmailErrorMessage(email);
    setEmailError(errorMessage);
  };

  const handlePasswordBlur = () => {
    const errorMessage = getPasswordErrorMessage(password);
    setPasswordError(errorMessage);
  };

  const isFormValid =
    isValidEmail(email) &&
    isValidPassword(password) &&
    !emailError &&
    !passwordError;

  const handleLogin = () => {
    console.log('로그인 성공:', { email, password });

    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleLogin,
  };
};
