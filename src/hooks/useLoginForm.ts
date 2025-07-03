import { useState } from 'react';
import { getEmailError, getPasswordError } from '@/utils/validators';

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => {
    const error = getEmailError(value);
    setEmailError(error);
  };

  const validatePassword = (value: string) => {
    const error = getPasswordError(value);
    setPasswordError(error);
  };

  const isValidForm = !emailError && !passwordError;

  return {
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    isValidForm,
  };
};

export default useLoginForm;
