import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import KakaoLogo from "@/assets/kakaologo.svg";
import PageContainer from "@/components/PageContainer";
import Input from "@/components/Input";
import { useInput } from "@/hooks/useInput";
import { validateEmail } from "@/utils/validate";

const LogoImage = styled.img`
  width: 88px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Button = styled.button`
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
`;

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    value: email,
    error: emailError,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    isValid: isEmailValid,
  } = useInput("", validateEmail);


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
        value={email}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        error={emailError}
      />
      <Input type="password" placeholder="비밀번호" />
      <Button onClick={handleLogin}>로그인</Button>
    </PageContainer>
  );
}
