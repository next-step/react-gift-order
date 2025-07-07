import { useAuth } from '@/context/AuthContext';
import styled from '@emotion/styled';
import NavigationBar from '@/common/NavigationBar';
import Text from '@/common/Text';

const MyPage = () => {
  const { user, logout } = useAuth();

  return (
    <Layout>
      <NavigationBar />
      <Container>
        {user && (
          <UserInfo>
            <Text size="label1" weight="bold">
              마이 페이지
            </Text>
            <Text size="label1" weight="regular">
              {user.name}님 안녕하세요!
            </Text>
            <Text size="label1" weight="regular">
              이메일 주소는 {user.email}입니다.
            </Text>
          </UserInfo>
        )}
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </Container>
    </Layout>
  );
};

export default MyPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.typography.fontSizes.label1};
  color: white;
  background-color: ${({ theme }) => theme.colors.red700};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
