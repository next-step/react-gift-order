import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import { palette, spacing, typography } from '@/styles/theme';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from ?? '/';

  return (
    <Layout>
      <NavBar />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: ${spacing.spacing10};
          padding: 150px 15px;
        `}
      >
        <h1
          css={css`
            font-size: ${typography.title1Bold.fontSize};
            font-weight: ${typography.title1Bold.fontWeight};
          `}
        >
          kakao
        </h1>
        <div
          css={css`
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: ${spacing.spacing5};
            padding: 0 ${spacing.spacing6};
          `}
        >
          <input
            type="email"
            placeholder="이메일"
            css={css`
              width: 100%;
              padding: 15px 15px;
              border: 1px solid ${palette.gray200};
              border-radius: 8px;
              font-size: ${typography.body1Regular.fontSize};
            `}
          />
          <input
            type="password"
            placeholder="비밀번호"
            css={css`
              width: 100%;
              padding: 15px 15px;
              border: 1px solid ${palette.gray200};
              border-radius: 8px;
              font-size: ${typography.body1Regular.fontSize};
            `}
          />

          <button
            type="button"
            onClick={() => navigate(from, { replace: true })}
            css={css`
              width: 100%;
              padding: 14px 0;
              background: ${palette.primary};
              border-radius: 8px;
              font-weight: 700;
              font-size: ${typography.body1Bold.fontSize};
              color: ${palette.black};
            `}
          >
            로그인
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;