import { useNavigate, useLocation } from 'react-router';
import { useInput } from './useInput';

const validateEmail = (email: string) => {
  if (!email) {
    return 'ID를 입력해주세요.';
  }
  const emailPattern = /^.+@.+\..+$/;
  if (!emailPattern.test(email)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }
  return '';
};

const validatePassword = (password: string) => {
  if (!password) {
    return 'PW를 입력해주세요.';
  }
  
  if (password.length < 8) {
    return 'PW는 최소 8글자 이상이어야 합니다.';
  }
  
  return '';
};

export const useLoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = useInput({
    validator: validateEmail,
  });

  const password = useInput({
    validator: validatePassword,
  });

  // 로그인 버튼 활성화 여부 판단
  const isFormValid = !validateEmail(email.value) && !validatePassword(password.value);

  const handleLogin = () => {
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      handleLogin();
    }
  };

  return {
    email,
    password,
    isFormValid,
    handleSubmit,
  };
}; 