/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import LoginFormSection from './components/LoginFormSection';
import { backgroundStyle } from './styles/Login.style';

const LoginPage = () => {
  const theme = useTheme();

  return (
    <div css={backgroundStyle(theme)}>
      <LoginFormSection />
    </div>
  );
};

export default LoginPage;
