import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import logo from '@/assets/logo.svg';
import KakaoButton from '@/components/common/KakaoButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: #fff;
`;

const Content = styled.main`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 470px;
`;

const LogoImg = styled.img`
  width: 88px;
  height: 88px;
`;

const Form = styled.form`
  width: 390px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  height: 30px;
  padding: 8px 0;
  margin-bottom: 16px;
  ${({ theme }) => theme.typography.body1Regular};
  &::placeholder {
    ${({ theme }) => theme.typography.body1Regular};
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(from, { replace: true });
  };

  return (
    <MobileLayout>
      <Wrapper>
        <NavBar />
        <Content>
          <LogoImg src={logo} alt="kakao 로고" />
          <Form onSubmit={handleSubmit}>
            <Input placeholder="이메일" type="email" />
            <Input placeholder="비밀번호" type="password" />
            <ButtonWrapper>
              <KakaoButton type="submit" fullWidth>
                로그인
              </KakaoButton>
            </ButtonWrapper>
          </Form>
        </Content>
      </Wrapper>
    </MobileLayout>
  );
}
