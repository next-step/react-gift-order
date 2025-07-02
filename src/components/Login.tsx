import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const exp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const ref = useRef(null);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const isEnabled = isValidEmail && isValidPassword;
  // console.log(isEnabled);
  return (
    <div css={containerStyle(theme)}>
      <h1 css={textSytle(theme)}>로그인</h1>
      <div css={inputContainerSytle(theme)}>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
            setIsValidEmail(exp.test(event.target.value));
          }}
          onBlur={() => {
            if (email === "") {
              setEmailMessage("이메일을 입력해주세요.");
            } else if (!isValidEmail) {
              setEmailMessage("이메일 형식이 올바르지 않습니다.");
            } else if (isValidEmail) {
              setEmailMessage("");
            }
          }}
          css={inputSytle(theme)}
          type="text"
          placeholder="이메일"
        />
        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {emailMessage}
        </p>

        <input
          onChange={(event) => {
            setPassword(event.target.value);
            setIsValidPassword(event.target.value.length >= 8);
          }}
          onBlur={() => {
            if (password === "") {
              setPasswordMessage("비밀번호를 입력해주세요.");
            } else if (!isValidPassword) {
              setPasswordMessage("비밀번호는 8자 이상이어야 합니다.");
            } else if (isValidPassword) {
              setPasswordMessage("");
            }
          }}
          css={inputSytle(theme)}
          type="password"
          placeholder="비밀번호"
        />
        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {passwordMessage}
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
        css={buttonSytle(theme, isEnabled)}
        disabled={!isEnabled} // 선택사항, 접근성 위해 넣어도 좋아
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
  width: 60%;
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
