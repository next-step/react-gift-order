import { LoginInfoContext } from '@/contexts/LoginInfoContext';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ResetStyles';
import { useState, type ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [loginInfo, setLoginInfo] = useState('');

  return (
    <LoginInfoContext.Provider value={{ loginInfo, setLoginInfo }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LoginInfoContext.Provider>
  );
}
