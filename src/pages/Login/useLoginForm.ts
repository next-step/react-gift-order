import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // 이메일 변경 핸들러
  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!value) {
      setEmailError('ID를 입력해주세요.');
    } else if (!EMAIL_REGEX.test(value)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  // 이메일 유효성 검사
  const validateEmail = () => {
    if (!email) {
      setEmailError('ID를 입력해주세요.');
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (!value) {
      setPasswordError('PW를 입력해주세요.');
    } else if (value.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = () => {
    if (!password) {
      setPasswordError('PW를 입력해주세요.');
    } else if (password.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const isValid = useMemo(() => {
    return EMAIL_REGEX.test(email) && password.length >= 8;
  }, [email, password]);

  const goToLogin = () => {
    navigate(from, { replace: true });
  };

  return {
    email,
    emailError,
    handleEmailChange,
    validateEmail,

    password,
    passwordError,
    handlePasswordChange,
    validatePassword,

    isValid,
    goToLogin,
  };
};
