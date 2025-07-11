import { useNavigate } from 'react-router-dom';
import { UserManagement } from '../contexts/UserManagement';
import { useEmailInput } from './useEmailInput';
import { usePasswordInput } from './usePasswordInput';

export const useLoginForm = () => {
  const email = useEmailInput();
  const password = usePasswordInput();

  const navigate = useNavigate();
  const { login } = UserManagement();

  const isValid = email.isValid && password.isValid;

  const goToLogin = () => {
    if (!isValid) return;
    login(email.value);
    navigate('/my', { replace: true });
  };

  return {
    email,
    password,
    isValid,
    goToLogin,
  };
};
