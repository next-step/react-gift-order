import styled from "@emotion/styled";
import UserContext from "@src/contexts/UserContext";
import useUserInfo, { type UserInfoHook } from "@src/hooks/useUserInfo";
import theme from "@src/styles/kakaoTheme";
import { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const userContext = useContext(UserContext);

  const searchParams = new URLSearchParams(location.search);
  const redirectPath = searchParams.get("redirect");

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const nagivateToRedirectionTarget = () => {
    navigate(redirectPath ? decodeURIComponent(redirectPath) : "/");
  };

  const handleLogin = (data: LoginFormData) => {
    userContext?.valid.setValue(true);
    userContext?.email.setValue(data.email);
    userContext?.user.setValue(data.email.split("@")[0]);
    nagivateToRedirectionTarget();
  };

  useEffect(() => {
    if (userContext?.valid.value) {
      nagivateToRedirectionTarget();
    }
  }, [userContext?.valid.value]);

  return (
    <InputForm onSubmit={handleSubmit(handleLogin)}>
      <h1>Kakao</h1>

      <InputElement>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "이메일 형식이 올바르지 않습니다."
            }
          }}
          render={({ field }) => (
            <InputField placeholder="이메일" type="text" {...field} />
          )}
        />
        {errors.email && <ErrorP>{errors.email.message}</ErrorP>}
      </InputElement>

      <InputElement>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다."
            }
          }}
          render={({ field }) => (
            <InputField placeholder="비밀번호" type="password" {...field} />
          )}
        />
        {errors.password && <ErrorP>{errors.password.message}</ErrorP>}
      </InputElement>

      <LoginButton
        type="submit"
        disabled={!(emailValue && passwordValue && isValid)}
      >
        로그인
      </LoginButton>
    </InputForm>
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

export default LoginForm;
