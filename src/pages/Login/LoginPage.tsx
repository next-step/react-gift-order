// src/pages/LoginPage.tsx
import styled from '@emotion/styled';
import logo from '@/resources/images/kakao_logo.svg';
// 경로를 '@/components/LoginFormSection'로 고정
import { LoginForm } from "./components/LoginFormSection";
const LoginPage = () => (
  <Wrapper>
    <Logo src={logo} alt="카카오 공식 로고" />
    <LoginForm />
  </Wrapper>
);

export default LoginPage;

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 2.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img(({ theme }) => ({
  width: '5.5rem',
  color: theme.colors.scale.gray900, // 여기도 scale 사용
}));
