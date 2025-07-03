import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const titleStyle = (theme: Theme) => css`
  font-size: ${theme.fontSizes.title2Bold};
  font-weight: 700;
  margin-bottom: ${theme.spacing.spacing4};
`;

export const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  column-gap: 8px;
  justify-items: center;
`;

export const itemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const imageStyle = css`
  width: 56px;
  height: 56px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const nameStyle = (theme: Theme) => css`
  font-size: ${theme.fontSizes.label2Regular};
  color: ${theme.colors.semantic.textDefault};
`;
