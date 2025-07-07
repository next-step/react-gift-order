import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Navigation from '@/components/Navigation';

const MyPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Navigation />
      <Wrapper>
        <Title>마이 페이지</Title>
        <Greeting>
          <strong>{user?.email.split('@')[0]}</strong>님 안녕하세요! <br />
          이메일 주소는 <strong>{user?.email}</strong>입니다.
        </Greeting>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.main`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Greeting = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.5;
`;

const LogoutButton = styled.button`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border: none;
  border-radius: 6px;
  ${({ theme }) => theme.typography.body.body2Regular};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[200]};
  }
`;
