import { Input } from "@/components/common";
import { LoginButton } from "@/components/login/LoginButton";
import styled from "@emotion/styled";

const LoginFormContainer = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  maxWidth: "420px",
  padding: `${theme.spacing4}`,
}));

const LoginInputWrapper = styled.div(({ theme }) => ({
  width: "100%",
  marginBottom: `${theme.spacing4}`,
}));

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginInputWrapper>
        <Input placeholder="이메일" type="email" />
      </LoginInputWrapper>

      <LoginInputWrapper>
        <Input placeholder="비밀번호" type="password" />
      </LoginInputWrapper>
      <LoginButton />
    </LoginFormContainer>
  );
};
