import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";

const bannerStyle = (theme: Theme) => css`
  background-color: ${theme.colors.semantic.kakaoYellow};
  padding: ${theme.spacing.spacing4};
  border-radius: 12px;
  text-align: center;
  font-size: ${theme.fontSizes.label1Regular};
  font-weight: 400;
  line-height: 1.4;

  span {
    font-weight: 700;
  }
`;

export default function SupportBanner() {
  const theme = useTheme();

  return (
    <div css={bannerStyle(theme)}>
      <span>카카오테크 캠퍼스 3기 여러분</span>
      <br />
      프론트엔드 2단계 과제 화이팅! 🎉
    </div>
  );
}
