import { useState } from 'react';
import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
  isValidEmail,
  isValidPassword,
} from '@/utils';

interface LoginFormData {
  email: string;
  password: string;
}

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
  onSubmit: (
    callback: (data: LoginFormData) => void
  ) => (e: React.FormEvent) => void;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

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

  const onSubmit =
    (callback: (data: LoginFormData) => void) => (e: React.FormEvent) => {
      e.preventDefault();

      if (!isFormValid) {
        return;
      }

      callback({ email, password });
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
    onSubmit,
  };
};
