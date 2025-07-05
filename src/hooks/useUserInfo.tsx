import { UserInfoContext } from '@/contexts/UserInfoContext';
import { useContext } from 'react';

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw Error('UserInfoContext is null.');
  } else {
    return context;
  }
};
