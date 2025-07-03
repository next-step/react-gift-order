import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const boxStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.semantic.kakaoYellow};
  border-radius: 12px;
  padding: ${theme.spacing.spacing4};
`;

export const plusIconStyle = (theme: Theme) => css`
  background-color: ${theme.colors.gray.gray00};
  color: ${theme.colors.gray.gray1000};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.body1Bold.fontSize};
  margin-right: ${theme.spacing.spacing3};
`;

export const textStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
`;
