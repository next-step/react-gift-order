import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const tabsWrapper = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  padding: 0 ${theme.spacing.spacing4} ${theme.spacing.spacing3};
  font-size: ${theme.fontSizes.label1Regular};
`;

const tabItem = (theme: Theme) => css`
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.gray.gray200};
  }
`;

export const tabItemStyle = (theme: Theme, isSelected: boolean) => css`
  ${tabItem(theme)};
  background-color: ${isSelected ? theme.colors.gray.gray300 : "transparent"};
`;
