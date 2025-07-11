import { useAuth } from '@contexts/AuthContext';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing.spacing4,
  backgroundColor: theme.colors.semantic.backgroundDefault,
}));

const Title = styled.h1(({ theme }) => ({
  ...theme.typography.title1Regular,
  margin: theme.spacing.spacing5,
  color: theme.colors.semantic.textDefault,
  textAlign: 'center',
}));

const Explanation = styled.p(({ theme }) => ({
  ...theme.typography.body1Regular,
  color: theme.colors.semantic.textSub,
  textAlign: 'center',
}));

const LogoutButton = styled.button(({ theme }) => ({
  margin: theme.spacing.spacing10,
  padding: theme.spacing.spacing3,
  border: 'none',
  borderRadius: '6px',
  backgroundColor: theme.colors.semantic.kakaoYellow,
  color: theme.colors.semantic.textDefault,
  ...theme.typography.body1Bold,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.semantic.kakaoYellowHover,
  },

  '&:active': {
    backgroundColor: theme.colors.semantic.kakaoYellowActive,
  },
}));

const MyPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('login');
  };
  return (
    <Container>
      <div>
        <Title>마이페이지</Title>
        <Explanation>{user?.name}님 안녕하세요</Explanation>
        <Explanation>이메일 주소는 {user?.email}입니다.</Explanation>
      </div>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Container>
  );
};

export default MyPage;
