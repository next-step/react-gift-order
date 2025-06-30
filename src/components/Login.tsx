import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div css={containerStyle(theme)}>
      <h1 css={textSytle(theme)}>로그인</h1>
      <div css={inputContainerSytle(theme)}>
        <input css={inputSytle(theme)} type="text" placeholder="이메일" />
        <input css={inputSytle(theme)} type="password" placeholder="비밀번호" />
      </div>
      <button
        onClick={() => {
          if (window.history.length) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        css={buttonSytle(theme)}>
        로그인
      </button>
    </div>
  );
};

export default Login;

const buttonSytle = (theme: Theme) => css`
  background-color: ${theme.colors.semantic.kakaoYellow}; // 배경색 변경
  border: 1px solid ${theme.colors.semantic.kakaoYellow}; // 테두리 색상 변경
  color: inherit; // 글자색은 그대로 유지
  align-items: center;
  width: 60%;
  height: 48px;
  font-color: ${theme.colors.gray.gray500}; // 글자색 변경
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
