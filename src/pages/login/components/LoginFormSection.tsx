import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
  onLogin: () => void;
};

export default function LoginFormSection({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="email"></Label>
      <Input
        id="email"
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label htmlFor="password"></Label>
      <Input
        id="password"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <LoginButton onClick={onLogin}>로그인</LoginButton>
    </Form>
  );
}

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
