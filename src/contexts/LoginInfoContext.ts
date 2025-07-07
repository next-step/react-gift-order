import { createContext } from 'react';

export type LoginInfoContextType = {
  loginInfo: string;
  setLoginInfo: (value: string) => void;
};

export const LoginInfoContext = createContext<LoginInfoContextType>({
  loginInfo: '',
  setLoginInfo: () => {},
});
