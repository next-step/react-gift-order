import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import { useAuth } from '@/contexts/AuthContext';
import { css } from '@emotion/react';

const wrapper = css`
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const logoutButton = css`
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
`;

export const MyPage = () => {
  const { logout } = useAuth();

  return (
    <Layout>
      <NavBar />
      <div css={wrapper}>
        <h1>마이페이지</h1>
        <button css={logoutButton} onClick={logout}>
          로그아웃
        </button>
      </div>
    </Layout>
  );
};
