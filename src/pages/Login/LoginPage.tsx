/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import LoginFormSection from './LoginFormSection';
import { backgroundStyle } from './Login.style';

const LoginPage = () => {
  const theme = useTheme();

  return (
    <div css={backgroundStyle(theme)}>
      <LoginFormSection />
    </div>
  );
};

export default LoginPage;