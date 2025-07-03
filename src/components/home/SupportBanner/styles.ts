// styles.ts
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const bannerStyle = (theme: Theme) => css`
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
