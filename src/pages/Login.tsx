import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing.spacing4,
  backgroundColor: theme.colors.semantic.backgroundDefault,
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.typography.title1Regular.fontSize,
  fontWeight: theme.typography.title1Regular.fontWeight,
  lineHeight: theme.typography.title1Regular.lineHeight,
  marginBottom: theme.spacing.spacing10,
  color: theme.colors.semantic.textDefault,
}));

const Input = styled.input(({ theme }) => ({
  width: '100%',
  maxWidth: '320px',
  padding: `${theme.spacing.spacing3} 0`,
  marginBottom: theme.spacing.spacing5,
  border: 'none',
  borderBottom: `1px solid ${theme.colors.semantic.borderDefault}`,
  fontSize: theme.typography.body1Regular.fontSize,
  fontWeight: theme.typography.body1Regular.fontWeight,
  color: theme.colors.semantic.textDefault,
  backgroundColor: 'transparent',
  outline: 'none',

  '::placeholder': {
    color: theme.colors.semantic.textPlaceholder,
  },
}));

const Button = styled.button(({ theme }) => ({
  width: '100%',
  maxWidth: '320px',
  padding: `${theme.spacing.spacing3} 0`,
  marginTop: theme.spacing.spacing3,
  backgroundColor: theme.colors.semantic.kakaoYellow,
  color: theme.colors.semantic.kakaoBrown,
  fontWeight: theme.typography.body1Bold.fontWeight,
  fontSize: theme.typography.body1Bold.fontSize,
  lineHeight: theme.typography.body1Bold.lineHeight,
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.semantic.kakaoYellowHover,
  },

  '&:active': {
    backgroundColor: theme.colors.semantic.kakaoYellowActive,
  },
}));

const Login = () => {
  const navigate = useNavigate();

  const loginButtunHandler = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <Title>kakao</Title>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button onClick={loginButtunHandler}>로그인</Button>
    </Container>
  );
};

export default Login;
