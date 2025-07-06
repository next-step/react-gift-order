import styled from '@emotion/styled';
import Layout from '@/components/layout/Layout';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  background-color: ${({ theme }) => theme.color.gray.gray300};
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray.gray500};
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
const Content = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.semantic.text.default};
`;
const My = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout>
      <NavigationBar />
      <Title>마이 페이지</Title>
      <Content>
        {user?.email}님 안녕하세요! <br />
        이메일 주소는 {user?.email} 입니다.
      </Content>

      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Layout>
  );
};
export default My;
