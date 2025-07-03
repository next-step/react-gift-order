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
    password,
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
        css={inputStyle(theme, !!email.error)}
        value={email.value}
        onChange={(e) => email.onChange(e.target.value)}
        onBlur={email.validate}
      />
      {email.error && <p css={errorTextStyle(theme)}>{email.error}</p>}

      <input
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호"
        css={inputStyle(theme, !!password.error)}
        value={password.value}
        onChange={(e) => password.onChange(e.target.value)}
        onBlur={password.validate}
      />
      {password.error && <p css={errorTextStyle(theme)}>{password.error}</p>}

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
