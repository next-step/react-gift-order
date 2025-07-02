import { useState } from 'react';

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [passwd, setPasswd] = useState('');
  const [isValidPass, setIsValidPass] = useState(true);

  const handleEmailCheck = e => {
    const value = e.target.value;
    setId(value);

    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  }

  const handlePasswordCheck = e => {
    const value = e.target.value;
    setPasswd(value);

    if (value.length < 8) {
      setIsValidPass(false);
    } else {
      setIsValidPass(true);
    }
  }

  const isFormValid = !isValidEmail || !isValidPass || id === '' || passwd === '';

  return {
    id,
    passwd,
    isValidEmail,
    isValidPass,
    handleEmailCheck,
    handlePasswordCheck,
    isFormValid,
  };
}
