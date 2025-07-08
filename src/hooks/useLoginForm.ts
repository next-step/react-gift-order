import { useState } from 'react';
import { getEmailError, getPasswordError } from '@/utils/validators';

const useLoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field: 'email' | 'password', value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
    if (field == 'email') {
      validateEmail();
    } else {
      validatePassword();
    }
  };

  const validateEmail = () => {
    const error = getEmailError(userInfo.email);
    setErrors(prev => ({ ...prev, email: error }));
    return !error;
  };

  const validatePassword = () => {
    const error = getPasswordError(userInfo.password);
    setErrors(prev => ({ ...prev, password: error }));
    return !error;
  };

  const isValidForm = !errors.email && !errors.password;

  return {
    userInfo,
    handleChange,
    errors,
    validateEmail,
    validatePassword,
    isValidForm,
  };
};

export default useLoginForm;
