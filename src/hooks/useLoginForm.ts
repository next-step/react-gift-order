import { useEffect, useState } from 'react';

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

  // 상태를 줄이는 과정에서 상태 검토(없애도 스타일 동일 작동 예상)
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // 상태를 줄이는 과정에서 삭제 검토
  const [loginActivated, setLoginActivated] = useState(false);

  useEffect(() => {
    if (emailTouched) {
      setIsError((prev) => ({
        ...prev,
        email: validateEmail(formValue.email),
      }));
    }
  }, [formValue.email, emailTouched]);

  useEffect(() => {
    if (passwordTouched) {
      setIsError((prev) => ({
        ...prev,
        password: validatePassword(formValue.password),
      }));
    }
  }, [formValue.password, passwordTouched]);

  useEffect(() => {
    const isEmailValid = validateEmail(formValue.email) === '';
    const isPasswordValid = validatePassword(formValue.password) === '';
    setLoginActivated(isEmailValid && isPasswordValid);
  }, [formValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: 'email' | 'password') => {
    if (field === 'email') {
      setEmailTouched(true);
      setIsError((prev) => ({
        ...prev,
        email: validateEmail(formValue.email),
      }));
    } else {
      setPasswordTouched(true);
      setIsError((prev) => ({
        ...prev,
        password: validatePassword(formValue.password),
      }));
    }
  };

  return {
    formValue,
    handleChange,
    handleBlur,
    isError,
    loginActivated,
  };
};

export default useLoginForm;
