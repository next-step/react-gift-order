import { UserInfoContext } from '@/contexts/UserInfoContext';
import { useContext } from 'react';

const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw Error('UserInfoContext is null.');
  } else {
    return context;
  }
};

export default useUserInfo;
