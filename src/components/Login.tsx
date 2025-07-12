import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import kakao_logo from '@src/assets/icons/kakao_logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import useLoginForm from '@src/hooks/useLoginForm';
import LoginInput from '@src/components/LoginInput';
import { useUserInfo } from '@/contexts/AuthContext';
import ROUTES from '@/constants/routes';

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

const buttonStyle = css`
  width: 100%;
  height: 2.75rem;
  font-size: ${theme.typography.subtitle2Regular.fontSize};
  font-weight: ${theme.typography.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle2Regular.lineHeight};
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
  height: ${theme.spacing.spacing4};
`;

const spacer48 = css`
  height: ${theme.spacing.spacing12};
`;

const Login = () => {
  const { setUser } = useUserInfo();
  const { register, handleSubmit, isError, loginActivated } = useLoginForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data: { email: string; password: string }) => {
    const name = data.email.split('@')[0];
    setUser({ name, email: data.email });
    const from = location.state?.from?.pathname || ROUTES.HOME;
    navigate(from, { replace: true });
  };

  return (
    <main css={mainStyle}>
      <img css={logoStyle} src={kakao_logo} alt="카카오 공식 로고" />
      <section css={sectionStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginInput
            {...register('email')}
            placeholder="이메일"
            error={isError.email}
          />

          <div css={spacer16} />

          <LoginInput
            {...register('password')}
            type="password"
            placeholder="비밀번호"
            error={isError.password}
          />

          <div css={spacer48} />

          <button css={buttonStyle} disabled={!loginActivated} type="submit">
            로그인
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
