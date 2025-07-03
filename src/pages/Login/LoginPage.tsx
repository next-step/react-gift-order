/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import LoginFormSection from './LoginFormSection';
import { backgroundStyle } from './Login.style';
import { UserManagementProvider } from './userManagement';

const LoginPage = () => {
  const theme = useTheme();

  return (
    <UserManagementProvider>
      <div css={backgroundStyle(theme)}>
        <LoginFormSection />
      </div>
    </UserManagementProvider>
  );
};

export default LoginPage;
