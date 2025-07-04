import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Input from "@/components/Input";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const ref = useRef(null);

  const validateEmail = (email: string) => {
    const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Boolean(EMAIL_REGEXP.test(email));
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  function useValidate(
    validator: (value: string) => boolean,
    errorMessage: string
  ) {
    const [string, setString] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.value;
      setString(nextValue);
      setIsValid(validator(nextValue));
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        setMessage("값을 입력해주세요");
      } else if (!isValid) {
        setMessage(errorMessage);
      } else if (isValid) {
        setIsValid(true);
        setMessage("");
      }
    };

    return { string, isValid, message, onChange, onBlur };
  }

  const email = useValidate(validateEmail, "이메일 형식을 지켜주세요.");
  const password = useValidate(validatePassword, "비밀번호는 8자 이상입니다.");
  const isFormValid = email.isValid && password.isValid;

  return (
    <div css={containerStyle()}>
      <h1 css={textStyle(theme)}>로그인</h1>
      <div css={inputContainerStyle(theme)}>
        <Input
          onChange={email.onChange}
          onBlur={email.onBlur}
          css={inputStyle(theme)}
          type="email"
          placeholder="이메일"
          message={email.message}
        ></Input>

        <Input
          onChange={password.onChange}
          onBlur={password.onBlur}
          css={inputStyle(theme)}
          type="password"
          placeholder="패스워드"
          message={password.message}
        ></Input>
      </div>

      <button
        onClick={() => {
          if (window.history.length) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        ref={ref}
        css={buttonStyle(theme, isFormValid)}
        disabled={!isFormValid}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;

const buttonStyle = (theme: Theme, enabled: boolean) => css`
  background-color: ${enabled
    ? theme.colors.semantic.kakaoYellow
    : "rgba(255, 230, 0, 0.5)"};
  border: 1px solid
    ${enabled ? theme.colors.semantic.kakaoYellow : "rgba(255, 230, 0, 0.5)"};
  color: ${enabled ? "inherit" : theme.colors.gray.gray500};
  align-items: center;
  width: 80%;
  height: 48px;
  cursor: ${enabled ? "pointer" : "not-allowed"};
  transition: background-color 0.3s ease;
`;

const textStyle = (theme: Theme) => css`
  font-size: ${theme.typography.title1Regular.size};
  font-weight: ${theme.typography.title1Regular.weight};
  line-height: ${theme.typography.title1Regular.lineHeight};
  text-align: center;
  margin-bottom: 20px;
`;

const inputContainerStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${theme.spacing.spacing8};
  padding: ${theme.spacing.spacing6};
`;

const inputStyle = (theme: Theme) => css`
  width: 60%;
  padding: ${theme.spacing.spacing4};
  border: none;
  border-bottom: 1px solid ${theme.colors.gray.gray500};
  font-size: ${theme.typography.body1Regular.size};
  font-weight: ${theme.typography.body1Regular.weight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  outline: none;
  &:focus {
    border-color: red;
  }
`;

const containerStyle = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
