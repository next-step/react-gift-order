import { ROUTE_PATH } from "@/App";
import Button from "@/components/common/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import styled from "@emotion/styled";
import type React from "react";
import useInput from "@/hooks/useInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { ThemeType } from "@/types/ThemeType";
import theme from "@/styles/theme/theme";

const ERROR_MSG_ID_EMPTY = "ID를 입력해주세요.";
const ERROR_MSG_ID_FORM = "ID는 이메일 형식으로 입력해주세요.";
const ERROR_MSG_PASSWORD_EMPTY = "PW를 입력해주세요.";
const ERROR_MSG_PASSWORD_FORM = "PW는 최소 8글자 이상이어야 합니다.";

const Login = () => {
  const id = useInput("", isValidId);
  const password = useInput("", isValidPassword);
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

  const isValidIdAndPassword =
    id.value.length !== 0 && password.value.length !== 0 && !id.errorMsg && !password.errorMsg;
  return (
    <Container>
      <Content>
        <Logo>kakao</Logo>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="email"
              placeholder="이메일"
              onChange={id.onChange}
              onBlur={id.onBlur}
              errorMsg={id.errorMsg}
              theme={theme}
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
              theme={theme}
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

const isValidId = (id: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let msg: string | null = null;
  if (!id) msg = ERROR_MSG_ID_EMPTY;
  else if (!emailRegex.test(id)) msg = ERROR_MSG_ID_FORM;
  return msg;
};
const isValidPassword = (password: string) => {
  let msg: string | null = null;
  if (!password) msg = ERROR_MSG_PASSWORD_EMPTY;
  else if (password.length < 8) msg = ERROR_MSG_PASSWORD_FORM;
  return msg;
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
  theme: ThemeType;
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
