import styled from "@emotion/styled";
import useUserInfo, { type UserInfoHook } from "@src/hooks/useUserInfo";
import theme from "@src/styles/kakaoTheme";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const userInfo = useUserInfo();

  const handleLogin = (userInfo: UserInfoHook) => {
    console.log({
      email: userInfo.email.value,
      password: userInfo.password.value
    });
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <LoginPageWrapper>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <h1>Kakao</h1>
        <InputField
          type="text"
          placeholder="이메일"
          value={userInfo.email.value}
          onChange={(e) => {
            userInfo.email.setValue(e.target.value);
          }}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={userInfo.password.value}
          onChange={(e) => {
            userInfo.password.setValue(e.target.value);
          }}
        />
        <LoginButton
          onClick={() => {
            handleLogin(userInfo);
          }}
        >
          로그인
        </LoginButton>
      </InputForm>
    </LoginPageWrapper>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 60%;
`;

const InputField = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${theme.colors.gray.gray500};
  width: 100%;
  background-color: transparent;
  height: 40px;
  outline: none;
  transition: border-bottom 0.25s ease;

  &:focus {
    border-bottom: 1px solid ${theme.colors.gray.gray700};
  }
`;

const LoginButton = styled.button`
  border: none;
  background-color: ${theme.colors.yellow.yellow600};
  padding: 20px;
  width: 100%;
`;

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80vh;
`;

export default LoginPage;
