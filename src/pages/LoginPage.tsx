import styled from "@emotion/styled";
import LoginForm from "@src/components/LoginForm";

function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginForm />
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80vh;
`;

export default LoginPage;
