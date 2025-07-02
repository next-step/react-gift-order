import { useEffect, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (value: string) => {
  if (!value) return 'ID를 입력해주세요.';
  if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
  return '';
};

const validatePassword = (value: string) => {
  if (!value) return 'PW를 입력해주세요.';
  if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
  return '';
};

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [pw, setPw] = useState('');
  const [pwFocused, setPwFocused] = useState(false);
  const [pwTouched, setPwTouched] = useState(false);
  const [pwError, setPwError] = useState('');

  const [loginActivated, setLoginActivated] = useState(false);

  useEffect(() => {
    setEmailError(validateEmail(email));
  }, [email, emailTouched]);

  useEffect(() => {
    if (pwTouched) {
      setPwError(validatePassword(pw));
    }
  }, [pw, pwTouched]);

  useEffect(() => {
    const emailValid = validateEmail(email) === '';
    const pwValid = validatePassword(pw) === '';
    setLoginActivated(emailValid && pwValid);
  }, [email, pw]);

  const handleEmailBlur = () => {
    setEmailFocused(false);
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handlePwBlur = () => {
    setPwFocused(false);
    setPwTouched(true);
    setPwError(validatePassword(pw));
  };

  return {
    email,
    setEmail,
    emailFocused,
    setEmailFocused,
    emailTouched,
    setEmailTouched,
    emailError,
    handleEmailBlur,

    pw,
    setPw,
    pwFocused,
    setPwFocused,
    pwTouched,
    setPwTouched,
    pwError,
    handlePwBlur,

    loginActivated,
  };
};

export default useLoginForm;
