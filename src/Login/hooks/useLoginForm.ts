import { useState, useEffect } from 'react';
import { emailRegEx, PASSWORD_MIN_LENGTH } from '@/constants/validation';

export const useLoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const validateField = (name: 'email' | 'password', value: string): string => {
    if (name === 'email') {
      if (!value) return 'ID를 입력해주세요.';
      if (!emailRegEx.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
    }
    if (name === 'password') {
      if (!value) return '비밀번호를 입력해주세요.';
      if (value.length < PASSWORD_MIN_LENGTH)
        return '비밀번호는 8자 이상이어야 합니다.';
    }
    return '';
  };

  const handleChange = (name: 'email' | 'password', value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (name: 'email' | 'password') => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    const newErrors = {
      email: validateField('email', values.email),
      password: validateField('password', values.password),
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  useEffect(() => {
    if (touched.email) {
      setErrors((prev) => ({
        ...prev,
        email: validateField('email', values.email),
      }));
    }
  }, [values.email, touched.email]);

  useEffect(() => {
    if (touched.password) {
      setErrors((prev) => ({
        ...prev,
        password: validateField('password', values.password),
      }));
    }
  }, [values.password, touched.password]);

  const isLoginValid = () => {
    return (
      !validateField('email', values.email) &&
      !validateField('password', values.password)
    );
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    isLoginValid,
  };
};
