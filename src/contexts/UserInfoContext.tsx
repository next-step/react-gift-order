import { createContext, useState, useEffect, useContext } from "react";

const UserInfoContext = createContext<{
  email: string | null;
  name: string | null;
} | null>(null);

export const UserInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<{
    email: string;
    name: string;
  } | null>(null);

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
      value={{ email: userInfo?.email || null, name: userInfo?.name || null }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
