import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const containerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.blue.blue100};
  border-radius: 12px;
  padding: 16px 0;
`;

export const tabItemStyle = (theme: Theme, isActive: boolean) => css`
  background: none;
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${isActive ? theme.typography.body1Bold.fontWeight : 400};
  color: ${isActive ? theme.colors.blue.blue700 : theme.colors.gray.gray400};
  cursor: pointer;
`;
