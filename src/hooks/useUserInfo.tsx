import { UserInfoContext } from '@/contexts/UserInfoContext';
import { useContext } from 'react';

export const useUserInfo = () => useContext(UserInfoContext);
