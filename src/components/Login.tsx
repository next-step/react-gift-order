import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import kakao_logo from '@src/assets/icons/kakao_logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const mainStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(-2.75rem + 100vh);
  align-items: center;
  justify-content: center;
`;

const logoStyle = css`
  background-color: ${theme.colors.gray00};
  width: 5.5rem;
`;

const sectionStyle = css`
  width: 100%;
  max-width: 26.25rem;
  padding: 16px;
`;

const inputDiv = css`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
  font: inherit;
`;

const inputStyle = (
  focused: boolean,
  hasError: boolean,
  touched: boolean
) => css`
  width: 100%;
  box-sizing: border-box;
  color: ${theme.colors.gray900};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  padding: 8px 0px;
  border-width: 0px 0px 1px;
  border-color: ${focused
    ? theme.colors.gray700
    : hasError && touched
      ? theme.colors.red700
      : theme.colors.textDisabled};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.textPlaceholder};
    opacity: 1;
  }
`;

const errorMessageStyle = css`
  color: ${theme.colors.red700 || 'red'};
  font-size: 0.75rem;
  margin-top: 4px;
`;

const buttonStyle = css`
  width: 100%;
  height: 2.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${theme.colors.textDefault};
  background-color: ${theme.colors.yellow600};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const spacer16 = css`
  width: 100%;
  height: 16px;
  background-color: transparent;
`;

const spacer48 = css`
  width: 100%;
  height: 48px;
  background-color: transparent;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [pw, setPw] = useState('');
  const [pwFocused, setPwFocused] = useState(false);
  const [pwTouched, setPwTouched] = useState(false);
  const [pwError, setPwError] = useState('');

  const [loginActivated, setLoginActivated] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (value: string) => {
    if (!value) return 'ID를 입력해주세요.';
    if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) return 'PW를 입력해주세요.';
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  };

  useEffect(() => {
    setEmailError(validateEmail(email));
  }, [email, emailTouched]);

  useEffect(() => {
    if (pwTouched) {
      setPwError(validatePassword(pw));
    }
  }, [pw, pwTouched]);

  useEffect(() => {
    const emailValid = validateEmail(email) === '';
    const pwValid = validatePassword(pw) === '';
    setLoginActivated(emailValid && pwValid);
  }, [email, pw]);

  const loginClicked = () => {
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <main css={mainStyle}>
      <img css={logoStyle} src={kakao_logo} alt="카카오 공식 로고" />
      <section css={sectionStyle}>
        <div css={inputDiv}>
          <input
            css={inputStyle(emailFocused, !!emailError, emailTouched)}
            placeholder="이메일"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => {
              setEmailFocused(false);
              setEmailTouched(true);
              setEmailError(validateEmail(email));
            }}
          />
          {emailTouched && emailError && (
            <p css={errorMessageStyle}>{emailError}</p>
          )}
        </div>

        <div css={spacer16} />

        <div css={inputDiv}>
          <input
            css={inputStyle(pwFocused, !!pwError, pwTouched)}
            placeholder="비밀번호"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onFocus={() => setPwFocused(true)}
            onBlur={() => {
              setPwFocused(false);
              setPwTouched(true);
              setPwError(validatePassword(pw));
            }}
          />
          {pwTouched && pwError && <p css={errorMessageStyle}>{pwError}</p>}
        </div>

        <div css={spacer48} />

        <button
          css={buttonStyle}
          onClick={loginClicked}
          disabled={!loginActivated}
        >
          로그인
        </button>
      </section>
    </main>
  );
};

export default Login;
