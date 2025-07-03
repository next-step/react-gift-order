import { useState } from 'react';

const EMAIL_REQUIRED_ERROR = 'ID를 입력해주세요.';
const EMAIL_INVALID_FORMAT_ERROR = 'ID는 이메일 형식으로 입력해주세요.';

const PASSWORD_REQUIRED_ERROR = 'PW를 입력해주세요.';
const PASSWORD_MIN_LENGTH_ERROR = 'PW는 최소 8글자 이상이어야 합니다.';
const PASSWORD_MIN_LENGTH = 8;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (value: string) => {
  if (!value) return EMAIL_REQUIRED_ERROR;
  if (!emailRegex.test(value)) return EMAIL_INVALID_FORMAT_ERROR;
  return '';
};

const validatePassword = (value: string) => {
  if (!value) return PASSWORD_REQUIRED_ERROR;
  if (value.length < PASSWORD_MIN_LENGTH) return PASSWORD_MIN_LENGTH_ERROR;
  return '';
};

const useLoginForm = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    setIsError((prev) => ({
      ...prev,
      [name]: name === 'email' ? validateEmail(value) : validatePassword(value),
    }));
  };

  const handleBlur = (field: 'email' | 'password') => {
    setIsError((prev) => ({
      ...prev,
      [field]:
        field === 'email'
          ? validateEmail(formValue.email)
          : validatePassword(formValue.password),
    }));
  };

  const loginActivated =
    validateEmail(formValue.email) === '' &&
    validatePassword(formValue.password) === '';

  return {
    formValue,
    handleChange,
    handleBlur,
    isError,
    loginActivated,
  };
};

export default useLoginForm;
