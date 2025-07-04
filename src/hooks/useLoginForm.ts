import { useState } from 'react';

const EMAIL_REGEX = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  // 이메일 유효성 검사
  const validateEmail = (value: string) => {
    if (!value) return 'ID를 입력해주세요.';
    if (!EMAIL_REGEX.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  };

  // 패스워드 유효성 검사
  const validatePassword = (value: string) => {
    if (!value) return 'PW를 입력해주세요.';
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  };

  // onBlur 시 에러 메시지 갱신
  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };

  // onChange 시 값 및 에러 상태 갱신
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailTouched) setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordTouched) setPasswordError(validatePassword(e.target.value));
  };

  // 버튼 활성화 조건
  const isValid =
    !validateEmail(email) &&
    !validatePassword(password) &&
    email.length > 0 &&
    password.length >= 8;

  return {
    email,
    password,
    emailError: emailTouched ? emailError : '',
    passwordError: passwordTouched ? passwordError : '',
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    isValid,
  };
};
