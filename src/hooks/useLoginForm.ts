import { useState } from 'react';

interface UseLoginFormProps {
  onSuccess: () => void;
}

function useLoginForm({ onSuccess }: UseLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  // 이메일 유효성 검사
  const validateEmail = (value: string) => {
    if (!value) return 'ID를 입력해주세요.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'ID는 이메일 형식이어야 해요.';
    return '';
  };

  // 비밀번호 유효성 검사
  const validatePassword = (value: string) => {
    if (!value) return 'PW를 입력해주세요.';
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  };

  // 입력값 변경 시마다 상태 및 에러 메시지, 버튼 활성화 상태 업데이트
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const error = validateEmail(value);
    setEmailError(error);
    setIsButtonActive(!error && !pwError && password.length >= 8);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    const error = validatePassword(value);
    setPwError(error);
    setIsButtonActive(!emailError && !error && email.length > 0);
  };

  // 포커스 아웃 시 에러 메시지 표시
  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };
  const handlePasswordBlur = () => {
    setPwError(validatePassword(password));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 모든 조건이 충족되면 onSuccess 콜백 실행
    if (!validateEmail(email) && !validatePassword(password)) {
      onSuccess();
    }
  };

  return {
    email,
    password,
    emailError,
    pwError,
    isButtonActive,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleSubmit,
  };
}

export default useLoginForm;
