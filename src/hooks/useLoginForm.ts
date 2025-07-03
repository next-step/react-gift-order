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
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (isEmailTouched) {
      const errorMessage = getEmailErrorMessage(value);
      setEmailError(errorMessage);
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (isPasswordTouched) {
      const errorMessage = getPasswordErrorMessage(value);
      setPasswordError(errorMessage);
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    const errorMessage = getEmailErrorMessage(email);
    setEmailError(errorMessage);
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
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
