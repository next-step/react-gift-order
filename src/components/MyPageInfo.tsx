import { useAuth } from '@/hooks/useAuth';
import styled from '@emotion/styled';
import { Navigate, useNavigate } from 'react-router-dom';

const Container = styled.div(({ theme }) => ({
  maxWidth: '720px',
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  backgroundColor: theme.semanticColors.background.default,
  paddingTop: '2.75rem',
}));

const Content = styled.main`
  width: 100%;
  padding: 0px 1rem;
`;

const Margin1 = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing8,
  backgroundColor: 'transparent',
}));

const Margin2 = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing2,
  backgroundColor: 'transparent',
}));

const Margin3 = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing6,
  backgroundColor: 'transparent',
}));

const Margin4 = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing10,
  backgroundColor: 'transparent',
}));

const Title = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.375rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const Ment = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const LogoutButton = styled.button(({ theme }) => ({
  height: '2.75rem',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  backgroundColor: theme.colorScale.gray300,
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  transition: 'backgroundColor 200ms, opacity 200ms',
  padding: '0px 12px',
}));

const MyPageInfo = ({}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  const email = user?.email ?? '사용자';
  const nickname = email.split('@')[0];

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };
  return (
    <>
      <Container>
        <Content>
          <Margin1></Margin1>
          <Title>마이 페이지</Title>
          <Margin2></Margin2>
          <Ment>{nickname}님 안녕하세요!</Ment>
          <Ment>이메일 주소는 {email}입니다.</Ment>
          <Margin3></Margin3>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          <Margin4></Margin4>
        </Content>
      </Container>
    </>
  );
};

export default MyPageInfo;
