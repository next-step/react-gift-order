import { css } from "@emotion/react";
import spacing from "@/styles/theme/spacing";
import fontSizes from "@/styles/theme/fontSizes";
import LoginForm from "@/components/login/LoginForm";

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

export default function LoginPage() {
  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>kakao</h1>
      <LoginForm />
    </div>
  );
}
