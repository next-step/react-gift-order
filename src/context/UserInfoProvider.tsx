import { useState, type ReactNode } from "react";
import { UserInfoContext } from "@/context/UserInfoContext";

export function UserInfoProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(() => {
    const email = sessionStorage.getItem("email");
    return email ? { email } : null;
  });
  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {children}
    </UserInfoContext.Provider>
  );
}
