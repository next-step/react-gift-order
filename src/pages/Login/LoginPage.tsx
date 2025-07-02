/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const {
    email,
    emailError,
    handleEmailChange,
    validateEmail,
  } = useLoginForm();

  const from = location.state?.from?.pathname || '/';

  const goToLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div css={backgroundStyle(theme)}>
      <div css={cardStyle(theme)}>
        <h1 css={logoStyle(theme)}>kakao</h1>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="이메일"
          css={inputStyle(theme, !!emailError)}
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <p css={errorTextStyle(theme)}>{emailError}</p>}

        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          css={inputStyle(theme, false)}
        />

        <button onClick={goToLogin} css={loginButtonStyle(theme)}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

const backgroundStyle = (theme: ThemeType) => css`
  background-color: ${theme.color.semantic.backgroundDefault};
  min-height: 100vh;
`;

const cardStyle = (theme: ThemeType) => css`
  max-width: 450px;
  margin: ${theme.spacing[12]} auto;
  background-color: ${theme.color.semantic.backgroundDefault};
  padding: 180px ${theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: ${theme.spacing[2]};
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.03);
`;

const logoStyle = (theme: ThemeType) => css`
  font-size: ${theme.spacing[8]};
  font-weight: bold;
  text-align: center;
  margin-bottom: ${theme.spacing[6]};
`;

const inputStyle = (theme: ThemeType, hasError: boolean) => css`
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: none;
  border-bottom: 1px solid ${hasError ? theme.color.red.red800 : theme.color.gray.gray400};
  background-color: transparent;
  font-size: ${theme.typography.body2Regular.fontSize};
  color: ${theme.color.gray.gray900};
  caret-color: ${theme.color.gray.gray900};

  &::placeholder {
    color: ${theme.color.semantic.textPlaceholder};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${hasError ? theme.color.red.red800 : theme.color.gray.gray600};
    box-shadow: 0 1px 0 0 ${hasError ? theme.color.red.red800 : theme.color.gray.gray600};
  }
`;

const errorTextStyle = (theme: ThemeType) => css`
  color: ${theme.color.red.red800};
  font-size: ${theme.typography.body2Regular.fontSize};
  margin-top: ${theme.spacing[1]};
`;

const loginButtonStyle = (theme: ThemeType) => css`
  margin-top: ${theme.spacing[4]};
  padding: ${theme.spacing[3]};
  background-color: ${theme.color.yellow.yellow600};
  border: none;
  border-radius: ${theme.spacing[2]};
  font-weight: ${theme.typography.body1Bold.fontWeight};;
  font-size: ${theme.typography.body1Bold.fontSize};
  cursor: pointer;
`;