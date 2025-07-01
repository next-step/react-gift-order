import { useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import colors from "@/styles/theme/colors";
import fontSizes from "@/styles/theme/fontSizes";
import spacing from "@/styles/theme/spacing";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  padding: 0 ${spacing.spacing4};
`;

const titleStyle = css`
  font-size: ${fontSizes.title1Bold};
  margin-bottom: ${spacing.spacing8};
`;

const inputStyle = css`
  width: 100%;
  max-width: 360px;
  margin-bottom: ${spacing.spacing4};
  padding: ${spacing.spacing4} ${spacing.spacing2};
  border: none;
  border-bottom: 1px solid ${colors.gray.gray300};
  font-size: ${fontSizes.body1Regular};
`;

const passwordInputStyle = css`
  ${inputStyle};
  margin-bottom: ${spacing.spacing8};
`;

const buttonStyle = css`
  width: 100%;
  max-width: 360px;
  background-color: ${colors.semantic.kakaoYellow};
  border: none;
  padding: ${spacing.spacing4};
  font-size: ${fontSizes.body1Bold};
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>kakao</h1>
      <input type="email" placeholder="이메일" css={inputStyle} />
      <input type="password" placeholder="비밀번호" css={passwordInputStyle} />
      <button onClick={handleLogin} css={buttonStyle}>
        로그인
      </button>
    </div>
  );
}
