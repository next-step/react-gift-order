import { useState } from 'react';
import { getEmailError, getPasswordError } from '@/utils/validators';

type Field = 'email' | 'password';

const useLoginForm = () => {
  const [userInfo, setUserInfo] = useState<Record<Field, string>>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<Field, string>>({
    email: '',
    password: '',
  });

  const validators: Record<Field, (value: string) => string> = {
    email: getEmailError,
    password: getPasswordError,
  };

  const handleChange = (field: Field, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
    validateField(field);
  };

  const validateField = (field: Field): boolean => {
    const validator = validators[field];
    const error = validator(userInfo[field]);

    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const isValidForm = !errors.email && !errors.password;

  return {
    userInfo,
    handleChange,
    errors,
    validateField,
    isValidForm,
  };
};

export default useLoginForm;
