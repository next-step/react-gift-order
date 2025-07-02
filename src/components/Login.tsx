import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const ref = useRef(null);

  const passwordValidator = {
    test: (pw) => {
      return pw.length >= 8;
    },
  };

  const exp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function useValidate(validator) {
    const [string, setString] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");

    const onChange = (e) => {
      setString(e.target.value);
      if (validator.test(string)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };

    const onBlur = () => {
      if (string == "") {
        setMessage("값을 입력해주세요");
      } else if (!isValid) {
        setMessage("입력값에 맞게 작성해주세요.");
      } else if (isValid) {
        setIsValid(true);
        setMessage("");
      }
    };

    return { string, isValid, message, onChange, onBlur };
  }

  const email = useValidate(exp);
  const password = useValidate(passwordValidator);
  const isFormValid = email.isValid && password.isValid;

  return (
    <div css={containerStyle(theme)}>
      <h1 css={textSytle(theme)}>로그인</h1>
      <div css={inputContainerSytle(theme)}>
        <input
          onChange={email.onChange}
          onBlur={email.onBlur}
          css={inputSytle(theme)}
          type="text"
          placeholder="이메일"
        />
        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {email.message}
        </p>

        <input
          onChange={password.onChange}
          onBlur={password.onBlur}
          css={inputSytle(theme)}
          type="password"
          placeholder="비밀번호"
        />
        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {password.message}
        </p>
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
        css={buttonSytle(theme, isFormValid)}
        disabled={!isFormValid}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;

const buttonSytle = (theme: Theme, enabled: boolean) => css`
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

const textSytle = (theme: Theme) => css`
  font-size: ${theme.typography.title1Regular.size};
  font-weight: ${theme.typography.title1Regular.weight};
  line-height: ${theme.typography.title1Regular.lineHeight};
  text-align: center;
  margin-bottom: 20px;
`;

const inputContainerSytle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 20px;
  }
`;

const inputSytle = (theme: Theme) => css`
  width: 60%;
  gap: 16px;
  padding: 20px;
  border : none;
  border-bottom: 1px solid ${theme.colors.gray.gray500};
  }
`;

const containerStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
