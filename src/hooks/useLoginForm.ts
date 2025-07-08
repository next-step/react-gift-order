import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
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
  const { login } = useAuth();

  const email = useInput({
    validator: validateEmail,
  });

  const password = useInput({
    validator: validatePassword,
  });

  const isFormValid = !validateEmail(email.value) && !validatePassword(password.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    //전역상태 먼저 설정
    login(email.value, () => {
      const from = location.state?.from || '/my';
      navigate(from, { replace: true });
    });
  };

  return {
    email,
    password,
    isFormValid,
    handleSubmit,
  };
};