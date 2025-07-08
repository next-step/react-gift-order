import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@/contexts/AuthContext';

export const useAuthNavigation = () => {
  const { user } = useUserInfo();
  const navigate = useNavigate();

  const navigateIfLoggedIn = (to: string) => {
    if (user) {
      navigate(to);
    } else {
      navigate('/login');
    }
  };

  return { navigateIfLoggedIn };
};
