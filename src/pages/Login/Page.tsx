import { ROUTE_PATH } from "@/components/routes/Routes";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import type React from "react";
import useInput from "@/hooks/useInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback } from "react";
import { setCookieValue } from "@/utils/cookie";

const ERROR_MSG_ID_EMPTY = "ID를 입력해주세요.";
const ERROR_MSG_ID_FORM = "ID는 이메일 형식으로 입력해주세요.";
const ERROR_MSG_PASSWORD_EMPTY = "PW를 입력해주세요.";
const ERROR_MSG_PASSWORD_FORM = "PW는 최소 8글자 이상이어야 합니다.";

const Login = () => {
  const id = useInput("", getIdError);
  const password = useInput("", getPasswordError);
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
            <ErrorMsg>{password.errorMsg}</ErrorMsg>
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

const getIdError = (id: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errorMsg: string | null = null;
  if (!id) errorMsg = ERROR_MSG_ID_EMPTY;
  else if (!emailRegex.test(id)) errorMsg = ERROR_MSG_ID_FORM;
  return errorMsg;
};
const getPasswordError = (password: string) => {
  let errorMsg: string | null = null;
  if (!password) errorMsg = ERROR_MSG_PASSWORD_EMPTY;
  else if (password.length < 8) errorMsg = ERROR_MSG_PASSWORD_FORM;
  return errorMsg;
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
