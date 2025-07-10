import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import type React from "react";
import useLoginInput from "@/hooks/useLoginInput";
import { useAuth } from "@/contexts/authContext";

const LoginPage = () => {
  const { user, onChange, onBlur, errorMsg } = useLoginInput();
  const { login } = useAuth();

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(user.id);
  };
  const isValidIdAndPassword = user.id.length !== 0 && user.password.length >= 8 && !errorMsg.id && !errorMsg.password;
  return (
    <Container>
      <Content>
        <Logo>kakao</Logo>
        <Form onSubmit={handleLoginSubmit}>
          <InputWrapper>
            <Input
              name="id"
              type="email"
              placeholder="이메일"
              onChange={onChange}
              onBlur={onBlur}
              errorMsg={errorMsg.id}
              value={user.id}
            />
            {errorMsg.id && <ErrorMsg>{errorMsg.id}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChange}
              onBlur={onBlur}
              errorMsg={errorMsg.password}
              value={user.password}
            />
            {errorMsg.password && <ErrorMsg>{errorMsg.password}</ErrorMsg>}
          </InputWrapper>
          <Divider />
          <Button fullWidth={true} type="submit" disabled={!isValidIdAndPassword}>
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
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

type InputType = {
  errorMsg: string | null;
};
const Input = styled.input<InputType>`
  width: 100%;
  min-height: 2.75rem;
  border: none;
  ${({ errorMsg, theme }) => {
    if (errorMsg === null) {
      return `border-bottom: 1px solid ${theme.color.borderColor.disabled};`;
    } else {
      return `border-bottom: 1px solid ${theme.color.stateColor.critical};`;
    }
  }}

  font: ${({ theme }) => theme.typography.subtitle1Regular};
  outline: none;
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray600};
  }
`;
const ErrorMsg = styled.p`
  width: 100%;
  text-align: left;
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.stateColor.critical};
  min-height: 1rem;
`;

export default LoginPage;
