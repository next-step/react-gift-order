import { css } from "@emotion/react";
import spacing from "@/styles/theme/spacing";
import { emailInputStyle } from "../EmailInput/style";
import colors from "@/styles/theme/colors";
import fontSizes from "@/styles/theme/fontSizes";

export const passwordInputStyle = css`
  ${emailInputStyle};
  margin-bottom: ${spacing.spacing8};
`;

export const errorTextStyle = css`
  color: ${colors.red.red300};
  font-size: ${fontSizes.body1Bold};
  margin-top: ${spacing.spacing1};
`;
