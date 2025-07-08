import styled from '@emotion/styled';
import { Header } from '@/components/Header/Header';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/shared/RoutePath';

const AppContainer = styled.div`
  width: 720px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoutButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

export const MyPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate(ROUTE_PATH.LOGIN);
  };
  return (
    <AppContainer>
      <Header title="선물하기" />
      <MyPageContainer>
        <div>{`로그인된 이메일: ${user?.email}`}</div>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </MyPageContainer>
    </AppContainer>
  );
};
