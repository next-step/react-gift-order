import { ROUTE_PATH } from "@/components/routes/Routes";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import type React from "react";
import useStringInput from "@/hooks/useStringInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback } from "react";
import { setCookieValue } from "@/utils/cookie";
import { getIdError, getPasswordError } from "@/utils/errorMessage";

const Login = () => {
  const id = useStringInput("", getIdError);
  const password = useStringInput("", getPasswordError);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getRedirectUrl = useCallback(() => {
    const path = searchParams.get("redirect")?.trim();
    if (path && (Object.values(ROUTE_PATH) as string[]).includes(path)) {
      return path;
    } else {
      return ROUTE_PATH.HOME;
    }
  }, [searchParams]);

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setCookieValue("userId", id.value);

    const redirectUrl = getRedirectUrl();
    if (redirectUrl === ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.HOME);
    } else {
      navigate(`${redirectUrl}`);
    }
  };

  const isValidIdAndPassword =
    id.value.length !== 0 && password.value.length !== 0 && !id.errorMsg && !password.errorMsg;
  return (
    <Container>
      <Content>
        <Logo>kakao</Logo>
        <Form onSubmit={handleLoginSubmit}>
          <InputWrapper>
            <Input
              type="email"
              placeholder="이메일"
              onChange={id.onChange}
              onBlur={id.onBlur}
              errorMsg={id.errorMsg}
              value={id.value}
            />
            <ErrorMsg>{id.errorMsg}</ErrorMsg>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="비밀번호"
              onChange={password.onChange}
              onBlur={password.onBlur}
              errorMsg={password.errorMsg}
              value={password.value}
            />
            {password.errorMsg && <ErrorMsg>{password.errorMsg}</ErrorMsg>}
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

export default Login;
