import { css } from "@emotion/react";
import spacing from "@/styles/theme/spacing";
import fontSizes from "@/styles/theme/fontSizes";
import colors from "@/styles/theme/colors";

export const emailInputStyle = css`
  width: 100%;
  max-width: 360px;
  margin-bottom: ${spacing.spacing4};
  padding: ${spacing.spacing4} ${spacing.spacing2};
  border: none;
  border-bottom: 1px solid ${colors.gray.gray300};
  font-size: ${fontSizes.body1Regular};
`;
