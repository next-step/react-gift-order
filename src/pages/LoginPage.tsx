import styled from "@emotion/styled";
import type { InputErrorHandlerHook } from "@src/hooks/useInputErrorHandler";
import useInputErrorHandler from "@src/hooks/useInputErrorHandler";
import useUserInfo, { type UserInfoHook } from "@src/hooks/useUserInfo";
import theme from "@src/styles/kakaoTheme";
import { createNewIDEvaluator } from "@src/utils/evaluator/implementation/idEvaluator";
import { createNewPWEvaluator } from "@src/utils/evaluator/implementation/passwordEvaluator";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const userInfo = useUserInfo();

  const idEvaluator = createNewIDEvaluator();
  const pwEvaluator = createNewPWEvaluator();
  const inputErrorHandler: InputErrorHandlerHook = useInputErrorHandler();

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
        <InputElement>
          <InputField
            type="text"
            placeholder="이메일"
            value={userInfo.email.value}
            onChange={(e) => {
              const newValue = e.target.value;
              userInfo.email.setValue(newValue);
              const isValid = idEvaluator.evaluate(newValue);
              inputErrorHandler.idValid.setValue(isValid);
              inputErrorHandler.idReason.setValue(idEvaluator.reason());
            }}
          />
          {!inputErrorHandler.idValid.value && (
            <ErrorP>{inputErrorHandler.idReason.value}</ErrorP>
          )}
        </InputElement>
        <InputElement>
          <InputField
            type="password"
            placeholder="비밀번호"
            value={userInfo.password.value}
            onChange={(e) => {
              const newValue = e.target.value;
              userInfo.password.setValue(newValue);
              const isValid = pwEvaluator.evaluate(newValue);
              inputErrorHandler.pwValid.setValue(isValid);
              inputErrorHandler.pwReason.setValue(pwEvaluator.reason());
            }}
          />
          {!inputErrorHandler.pwValid.value && (
            <ErrorP>{inputErrorHandler.pwReason.value}</ErrorP>
          )}
        </InputElement>
        <LoginButton
          disabled={
            !(
              inputErrorHandler.idValid.value &&
              inputErrorHandler.pwValid.value &&
              userInfo.email.value.length > 0 &&
              userInfo.password.value.length > 0
            )
          }
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

const ErrorP = styled.p`
  font-size: 12.5px;
  margin: 5px;
  width: 100%;
  color: ${theme.colors.red.red700};
`;

const InputElement = styled.div`
  width: 100%;
`;

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
