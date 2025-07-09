import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@/contexts/AuthContext';
import ROUTES from '@/constants/routes';

export const useAuthNavigation = () => {
  const { user } = useUserInfo();
  const navigate = useNavigate();

  const navigateIfLoggedIn = (to: string) => {
    if (user) {
      navigate(to);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  return { navigateIfLoggedIn };
};
