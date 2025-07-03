import { useState } from 'react';

// useLoginForm.ts 파일 상단에 추가
export const MIN_PASSWORD_LENGTH = 8;

interface UseLoginFormProps {
  onSuccess: () => void;
}
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
  if (value.length < MIN_PASSWORD_LENGTH)
    return `PW는 최소 ${MIN_PASSWORD_LENGTH}글자 이상이어야 합니다.`;
  return '';
};
// 이메일, 비밀번호의 유효성 검사 로직의 실행은 매 렌더링마다 하는 것이 맞지만
// 유효성 검사 함수의 정의를 매 렌더링마다 하는 것은 좋지 않음
// 따라서 함수를 커스텀 훅 바깥에 정의함
// useLoginForm이 호출될 때(컴포넌트가 리렌더될 떄) 함수가 한 번만 만들어지고, 리렌더링과 상관없이 재사용됨

function useLoginForm({ onSuccess }: UseLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  // 입력값 변경 시마다 상태 및 에러 메시지, 버튼 활성화 상태 업데이트
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const error = validateEmail(value);
    setEmailError(error);
    setIsButtonActive(
      !error && !pwError && password.length >= MIN_PASSWORD_LENGTH,
    );
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
