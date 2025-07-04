
import Navbar from "./../components/navbar/Navbar";
import { PaddingSm } from "./../components/padding/Padding";
import { PaddingMd } from "@/components/padding/Padding";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import useInput from "@/hooks/useInput";
import { emailValidator, passwordValidator } from "@/utils/validators";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: calc(-2.75rem + 100vh);
`;
const Loginform = styled.section`
  width: 100%;
  max-width: 26.25rem;
  padding: 16px;
`;
const Logo = styled.img`
  width: 5.5rem;
`;
const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input<{ hasError: boolean }>`
  outline: none;

  width: 100%;
  color: ${({ theme }) => theme.colors.text.default};
  border-width: 0px 0px 1px;
  padding: 8px 0px;
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.colors.red.red700 : theme.colors.gray.gray400};

  ${({ theme }) => theme.typography.body1Regular}
  &:focus {
    border-color: ${({ theme }) => theme.colors.gray.gray900};
  }
  &:blur {
    border-color: ${({ theme }) => theme.colors.red.red700};
  }
`;

const LoginBtn = styled.button<{ activated: boolean }>`
  background-color: ${({ theme }) => theme.colors.yellow.yellow600};
  ${({ theme }) => theme.typography.body2Regular}
  width: 100%;
  height: 2.75rem;
  opacity: ${({ activated }) => (activated ? 1 : 0.5)};
  cursor: ${({ activated }) => (activated ? "pointer" : "not-allowed")};
`;

const ValidationMsg = styled.p`
  color: ${({ theme }) => theme.colors.red.red700};
  ${({ theme }) => theme.typography.label2Regular}
`;

const Login = () => {
  const navigate = useNavigate();
  const email = useInput({ validator: emailValidator });
  const password = useInput({ validator: passwordValidator });
  const isActivatedBtn = email.isValid && password.isValid;
  const handleLoginClick = () => {
    if (isActivatedBtn) {
      navigate("/");
    }
  };
  return (
    <div>
      <Navbar />
      <LoginWrapper>
        <Logo src="src/assets/images/카카오로고.svg" alt="" />
        <Loginform>
          <InputWrapper>
            <Input
              {...email}
              onChange={(e) => email.onChange(e.target.value)}
              hasError={!!email.error}
              placeholder="이메일"
            />
            {<ValidationMsg>{email.error}</ValidationMsg>}
          </InputWrapper>
          <PaddingSm />
          <InputWrapper>
            <Input
              {...password}
              onChange={(e) => password.onChange(e.target.value)}
              hasError={!!password.error}
              placeholder="비밀번호"
            />
            <ValidationMsg>{password.error}</ValidationMsg>
          </InputWrapper>
          <PaddingMd />
          <LoginBtn
            activated={isActivatedBtn}
            disabled={!isActivatedBtn}
            onClick={handleLoginClick}
          >
            로그인
          </LoginBtn>
        </Loginform>
      </LoginWrapper>
    </div>
  );
};

export default Login;

