import { createContext, useState, useContext } from "react";

type UserInfo = {
  email: string | null;
  name: string | null;
};

type UserInfoContextType = UserInfo & {
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};

const UserInfoContext = createContext<UserInfoContextType | null>(null);

export const UserInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
    const sessionUserInfo = sessionStorage.getItem("kakaotech/userInfo");
    if (!sessionUserInfo) return null;

    const { email } = JSON.parse(sessionUserInfo);
    const name = email.split("@")[0];
    return { email, name };
  });

  return (
    <UserInfoContext.Provider
      value={{
        email: userInfo?.email || null,
        name: userInfo?.name || null,
        setUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
export const useUserInfo = () => useContext(UserInfoContext);
