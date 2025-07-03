import { useState } from 'react';
import { PASSWORD_LENGTH } from '@/constants/password.ts';

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailCheck = e => {
    const value = e.target.value;
    setId(value);

    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  }

  const handlePasswordCheck = e => {
    const value = e.target.value;
    setPassword(value);

    setIsValidPassword(value.length > PASSWORD_LENGTH);
  }

  const isFormValid = !isValidEmail || !isValidPassword || id === '' || password === '';

  return {
    id,
    password,
    isValidEmail,
    isValidPassword,
    handleEmailCheck,
    handlePasswordCheck,
    isFormValid,
  };
}
