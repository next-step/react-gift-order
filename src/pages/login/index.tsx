import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <Wrapper>
      <Title>kakao</Title>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Label />
        <Input placeholder="이메일" />

        <Label />
        <Input type="password" placeholder="비밀번호" />

        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px 80px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.semantic.text.placeholder};
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.semantic.border.default};
  padding: 12px 0;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.kakao.yellow};
  color: ${({ theme }) => theme.colors.brand.kakao.brown};
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.kakao.yellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.brand.kakao.yellowActive};
  }
`;
