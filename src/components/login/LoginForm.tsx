import { Input } from "@/components/common";
import { LoginButton } from "@/components/login/LoginButton";
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

const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.color.red[700],
  fontSize: theme.typography.label1Regular.fontSize,
  fontWeight: theme.typography.label1Regular.fontWeight,
  lineHeight: theme.typography.label1Regular.lineHeight,
  marginTop: theme.spacing1,
}));

export const LoginForm = () => {
  const {
    formData,
    errors,
    isFormValid,
    handleIdChange,
    handlePasswordChange,
    handleIdBlur,
    handlePasswordBlur,
  } = useLoginForm();

  return (
    <LoginFormContainer>
      <LoginInputWrapper>
        <Input
          placeholder="이메일"
          type="email"
          value={formData.id}
          onChange={e => handleIdChange(e.target.value)}
          onBlur={handleIdBlur}
          hasError={!!errors.id}
        />
        {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
      </LoginInputWrapper>

      <LoginInputWrapper>
        <Input
          placeholder="비밀번호"
          type="password"
          value={formData.password}
          onChange={e => handlePasswordChange(e.target.value)}
          onBlur={handlePasswordBlur}
          hasError={!!errors.password}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </LoginInputWrapper>
      <LoginButton isDisabled={!isFormValid} />
    </LoginFormContainer>
  );
};
