import { useState } from 'react';

type Field = 'email' | 'password';

interface FormValues {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}

const EMAIL_REQUIRED_ERROR = 'ID를 입력해주세요.';
const EMAIL_INVALID_FORMAT_ERROR = 'ID는 이메일 형식으로 입력해주세요.';

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_REQUIRED_ERROR = 'PW를 입력해주세요.';
const PASSWORD_MIN_LENGTH_ERROR = `PW는 최소 ${PASSWORD_MIN_LENGTH}글자 이상이어야 합니다.`;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (value: string): string => {
  if (!value) return EMAIL_REQUIRED_ERROR;
  if (!emailRegex.test(value)) return EMAIL_INVALID_FORMAT_ERROR;
  return '';
};

const validatePassword = (value: string): string => {
  if (!value) return PASSWORD_REQUIRED_ERROR;
  if (value.length < PASSWORD_MIN_LENGTH) return PASSWORD_MIN_LENGTH_ERROR;
  return '';
};

const validateField = (field: Field, value: string): string => {
  return field === 'email' ? validateEmail(value) : validatePassword(value);
};

const useLoginForm = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState<Errors>({
    email: '',
    password: '',
  });

  const setError = (field: Field, value: string) => {
    setIsError((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const setValue = (field: Field, value: string) => {
    setFormValue((prev) => ({ ...prev, [field]: value }));
  };

  const loginActivated =
    formValue.email !== '' &&
    formValue.password !== '' &&
    isError.email === '' &&
    isError.password === '';

  return {
    formValue,
    setValue,
    isError,
    setError,
    loginActivated,
  };
};

export default useLoginForm;
