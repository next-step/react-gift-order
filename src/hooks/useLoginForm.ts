import { useEffect, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isValid, setIsvalid] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setEmailError('ID를 입력해주세요');
      return false;
    }

    if (!emailRegex.test(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요');
      return false;
    }

    setEmailError('');
    return true;
  };

  useEffect(() => {
    setIsvalid(validateEmail());
  }, [email]);

  return {
    email,
    setEmail,
    emailError,
    validateEmail,
    isValid,
  };
};
