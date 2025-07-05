import { ErrorMessage, Input } from "@/components/common";
import { LoginButton } from "@/components/login";
import { useLoginForm } from "@/hooks/login/useLoginForm";
import styled from "@emotion/styled";

const LoginFormContainer = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  maxWidth: "420px",
  padding: theme.spacing4,
}));

const LoginInputWrapper = styled.div(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing4,
}));

export const LoginForm = () => {
  const { isFormValid, handleSubmit, register } = useLoginForm();

  const idField = register("id");
  const passwordField = register("password");

  return (
    <LoginFormContainer as="form" onSubmit={handleSubmit}>
      <LoginInputWrapper>
        <Input placeholder="이메일" type="email" {...idField} />
        <ErrorMessage>{idField.error || "\u00A0"}</ErrorMessage>
      </LoginInputWrapper>

      <LoginInputWrapper>
        <Input placeholder="비밀번호" type="password" {...passwordField} />
        <ErrorMessage>{passwordField.error || "\u00A0"}</ErrorMessage>
      </LoginInputWrapper>
      <LoginButton isDisabled={!isFormValid} />
    </LoginFormContainer>
  );
};
