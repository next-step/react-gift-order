import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 이전 경로 정보 가져오기 (없으면 null)
  const from = location.state?.from || '/';

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <Logo>kakao</Logo>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Form>
    </Container>
  );
};



export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing12} ${({ theme }) => theme.spacing.spacing5} 0;
  background-color: ${({ theme }) => theme.backgroundColors.default};
  max-width: 720px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Logo = styled.h1`
  font: ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.textColors.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing12};
`;

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

const Input = styled.input`
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.spacing3};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  background-color: ${({ theme }) => theme.backgroundColors.fill};
  color: ${({ theme }) => theme.textColors.default};
  font: ${({ theme }) => theme.typography.body2Regular};

  &::placeholder {
    color: ${({ theme }) => theme.textColors.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue600};
    background-color: ${({ theme }) => theme.backgroundColors.default};
  }
`;

const LoginButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.sementicColors.kakaoYellow};
  color: #000000;
  font: ${({ theme }) => theme.typography.body2Bold};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.sementicColors.kakaoYellowActive};
  }
`;
