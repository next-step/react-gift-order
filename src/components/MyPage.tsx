import { useUserInfo } from "@/context/UserInfoProvider";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";

const MyPage: React.FC = () => {
  const { user, setUser } = useUserInfo();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    setUser({ email, password });
    if (!email || !password) {
      navigate("/login");
    }
  }, []);

  return (
    <div css={ContainerStyle(theme)}>
      <header css={HeaderStyle(theme)}>마이 페이지</header>
      <div>
        <div>{(user?.email || "").split("@")[0]}님 안녕하세요</div>
        <div>이메일 주소는 {user?.email}입니다.</div>
      </div>
      <button
        onClick={() => {
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("password");
          navigate("/login");
        }}
        css={buttonStyle(theme)}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyPage;

const buttonStyle = (theme: Theme) => css`
  background-color: ${theme.colors.gray.gray200};
  width: 15%;
  height: ${theme.spacing.spacing10};
  cursor: pointer;
`;
const ContainerStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing5};
`;
const HeaderStyle = (theme: Theme) => css`
  font-size: ${theme.typography.label1Bold.size};
`;
