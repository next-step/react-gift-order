import { ROUTE_PATH } from "@/App";
import Button from "@/components/common/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import styled from "@emotion/styled";
import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [redirectUrl] = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const redirect = () => {
      const path = redirectUrl.get("redirect")?.trim();
      if (path && (Object.values(ROUTE_PATH) as string[]).includes(path)) {
        return path;
      } else {
        return ROUTE_PATH.HOME;
      }
    };
    if (redirect() === ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.HOME);
    } else {
      navigate(`${redirect()}`);
    }
  };
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <Container>
      <Content>
        <Logo>kakao</Logo>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="이메일" onChange={handleIdChange} />
          <Input type="password" placeholder="비밀번호" onChange={handlePasswordChange} />
          <Divider />
          <Button fullWidth={true} type="submit">
            로그인
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  height: 3rem;
  text-align: center;
  font: ${({ theme }) => theme.typography.title1Regular};
  font-size: 2rem;
`;
const Form = styled.form`
  max-width: 26rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const Input = styled.input`
  width: 100%;
  min-height: 2.75rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderColor.disabled};
  font: ${({ theme }) => theme.typography.subtitle1Regular};
  outline: none;
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray600};
  }
`;

export default Login;
