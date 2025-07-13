import useSessionStorage from "@/hooks/useSessionStorage";
import React, { createContext, useContext } from "react";

type UserInfo = {
  email: string | null;
  name: string | null;
};

type UserInfoContextType = UserInfo & {
  setUserInfo: (userInfo: UserInfo) => void;
  removeUserInfo: () => void;
};

const UserInfoContext = createContext<UserInfoContextType | null>(null);

export const UserInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userInfo = useSessionStorage<UserInfo>("kakaotech/userInfo", {
    email: null,
    name: null,
  });

  return (
    <UserInfoContext.Provider
      value={{
        email: userInfo.value.email,
        name: userInfo.value.name,
        setUserInfo: userInfo.updateValue,
        removeUserInfo: userInfo.removeValue,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
export const useUserInfo = () => useContext(UserInfoContext);
