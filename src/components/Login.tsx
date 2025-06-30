import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import kakao_logo from '@src/assets/icons/kakao_logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const mainStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(-2.75rem + 100vh);
  align-items: center;
  justify-content: center;
`;

const logoStyle = css`
  background-color: ${theme.colors.gray100};
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

const inputStyle = css`
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
  border-color: ${theme.colors.textDisabled};

  &:focus {
    border-color: ${theme.colors.gray700};
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.textPlaceholder};
    opacity: 1; /
  }
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
  const navigate = useNavigate();
  const location = useLocation();

  const loginClicked = () => {
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <main css={mainStyle}>
      <img css={logoStyle} src={kakao_logo} alt="카카오 공식 로고" />
      <section css={sectionStyle}>
        <div css={inputDiv}>
          <input css={inputStyle} placeholder="이메일" type="email" />
        </div>
        <div css={spacer16} />
        <div css={inputDiv}>
          <input css={inputStyle} placeholder="비밀번호" type="password" />
        </div>
        <div css={spacer48} />
        <button css={buttonStyle} onClick={loginClicked}>
          로그인
        </button>
      </section>
    </main>
  );
};

export default Login;
