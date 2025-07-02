/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import {
  inputStyle,
  errorTextStyle,
  loginButtonStyle,
  cardStyle,
  logoStyle,
} from './Login.style';
import { useLoginForm } from './useLoginForm';

const LoginFormSection = () => {
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
    isValid,
    goToLogin,
  } = useLoginForm();

  return (
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

      <button
        css={loginButtonStyle(theme)}
        disabled={!isValid}
        onClick={goToLogin}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginFormSection;