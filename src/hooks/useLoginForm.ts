import { useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email('ID는 이메일 형식으로 입력해주세요.');

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  // 이메일 유효성 검사
  const validateEmailField = (value: string) => {
    if (!value) return 'ID를 입력해주세요.';
    const result = emailSchema.safeParse(value);
    if (!result.success) return result.error.errors[0].message;
    return '';
  };

  // 비밀번호 유효성 검사
  const validatePasswordField = (value: string) => {
    if (!value) return 'PW를 입력해주세요.';
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  };

  // onBlur 핸들러
  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmailField(email));
  };
  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePasswordField(password));
  };

  // onChange 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailTouched) {
      setEmailError(validateEmailField(e.target.value));
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordTouched) {
      setPasswordError(validatePasswordField(e.target.value));
    }
  };

  // 버튼 활성화 조건
  const isValid =
    validateEmailField(email) === '' && validatePasswordField(password) === '';

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
}
