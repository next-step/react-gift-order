import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import KakaoLogo from "@/assets/kakaologo.svg";
import PageContainer from "@/components/PageContainer";
import Input from "@/components/Input";
import { useInput } from "@/hooks/useInput";
import { useValidate } from "@/hooks/useValidate";
import { validateEmail, validatePassword } from "@/utils/validate";

const LogoImage = styled.img`
  width: 88px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Button = styled.button<{ disabled?: boolean }>`
  ${({ theme }) => theme.typography.body.body2Regular};
  width: 100%;
  max-width: 320px;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  color: #000;
  border: none;
  border-radius: 6px;
  margin-top: ${({ theme }) => theme.spacing.spacing9};
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.color.semantic.kakaoYellowPressed};
    border: none;
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.color.yellow.yellow300};
    color: ${({ theme }) => theme.color.semantic.textDisabled};
    cursor: not-allowed;
  }
`;

export default function LoginPage() {
  const navigate = useNavigate();

  const emailInput = useInput("");
  const emailValidation = useValidate(emailInput.value, validateEmail);

  const passwordInput = useInput("");
  const passwordValidation = useValidate(passwordInput.value, validatePassword);

  const handleLogin = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <PageContainer>
      <LogoImage src={KakaoLogo} alt="kakao logo" />
      <Input
        type="email"
        placeholder="이메일"
        value={emailInput.value}
        onChange={emailInput.onChange}
        onBlur={emailValidation.onBlur}
        error={emailValidation.error}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={passwordInput.value}
        onChange={passwordInput.onChange}
        onBlur={passwordValidation.onBlur}
        error={passwordValidation.error}
      />
      <Button onClick={handleLogin} disabled={!(emailValidation.isValid && passwordValidation.isValid)}>로그인</Button>
    </PageContainer>
  );
}
