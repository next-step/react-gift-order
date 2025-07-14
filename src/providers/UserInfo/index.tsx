import type { UserInfo } from '@/types/userInfo';
import { userInfoStorage } from '@/utils/storage';
import { createContext, useContext, useState } from 'react';

const UserInfoContext = createContext<
  | {
      userInfo: UserInfo | undefined;
      setUserInfo: (userInfo?: UserInfo) => void;
    }
  | undefined
>(undefined);

export const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const prevUserInfo = userInfoStorage.get();
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(prevUserInfo);

  const handleSetUserInfo = (userInfo?: UserInfo) => {
    setUserInfo(userInfo);

    if (userInfo) {
      return userInfoStorage.set(userInfo);
    }
    userInfoStorage.remove();
  };

  return (
    <UserInfoContext.Provider
      value={{
        userInfo,
        setUserInfo: handleSetUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error('useUserInfo must be used within a UserInfoProvider');
  }

  return context;
};
