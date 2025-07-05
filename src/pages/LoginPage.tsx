import { css } from '@emotion/react';
import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import { LoginFormSection } from '@/components/LoginFormSection';
import { spacing, typography } from '@/styles/theme';

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.spacing10};
  padding: 150px 15px;
`;

export const LoginPage = () => (
  <Layout>
    <NavBar />
    <div css={pageWrapper}>
      <h1
        css={css`
          font-size: ${typography.title1Bold.fontSize};
          font-weight: ${typography.title1Bold.fontWeight};
        `}
      >
        kakao
      </h1>
      <LoginFormSection />
    </div>
  </Layout>
);

export default LoginPage;
