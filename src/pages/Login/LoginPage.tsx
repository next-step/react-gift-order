/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';
import {
  backgroundStyle,
  cardStyle,
  logoStyle,
  inputStyle,
  errorTextStyle,
  loginButtonStyle,
} from './Login.style';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const {
    email,
    emailError,
    handleEmailChange,
    validateEmail,
    password,
    passwordError,
    handlePasswordChange,
    validatePassword,
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
          css={inputStyle(theme, !!passwordError)}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          onBlur={validatePassword}
        />
        {passwordError && <p css={errorTextStyle(theme)}>{passwordError}</p>}

        <button onClick={goToLogin} css={loginButtonStyle(theme)}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;