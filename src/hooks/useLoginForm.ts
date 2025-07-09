import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useInput } from './useInput';
import { validateEmail, validatePassword } from '@/utils/validation/login';

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

    login(email.value, () => {
      const from = location.state?.from || '/mypage';
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