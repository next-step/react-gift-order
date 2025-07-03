import { css } from "@emotion/react";
import fontSizes from "@/styles/theme/fontSizes";
import colors from "@/styles/theme/colors";
import spacing from "@/styles/theme/spacing";

export const buttonStyle = css`
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
