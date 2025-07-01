import { css } from "@emotion/react";
import spacing from "@/styles/theme/spacing";
import { emailInputStyle } from "../EmailInput/style";

export const passwordInputStyle = css`
  ${emailInputStyle};
  margin-bottom: ${spacing.spacing8};
`;
