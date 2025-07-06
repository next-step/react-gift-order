import { createContext, useState, useEffect, useContext } from "react";

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
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const sessionUserInfo = sessionStorage.getItem("kakaotech/userInfo");
    if (sessionUserInfo) {
      const email = JSON.parse(sessionUserInfo).email;
      const name = email.split("@")[0];
      setUserInfo({ email, name });
    }
  }, []);

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
