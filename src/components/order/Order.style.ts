import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const ThumbNailStyle = (
  theme: Theme,
  cardId: number,
  selectedId: number | undefined
) => css`
  flex-shrink: 0;
  padding: ${theme.spacing.spacing0};
  border: 3px solid ${selectedId === cardId ? "black" : "transparent"};
  border-radius: 4px;
`;

export const ThumbNailContainerStyle = (theme: Theme) => css`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  gap: ${theme.spacing.spacing5};
`;

export const CardWrapperStyle = (theme: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.spacing10};
`;

export const WrapperStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 120px;
  gap: ${theme.spacing.spacing10};
`;

export const MessageStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.spacing8};
  width: 100%;
`;

export const FormSectionWrapperStyle = (theme: Theme) => css`
  width: 100%;
  padding: ${theme.spacing.spacing8};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
`;

export const ReceiverFormStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
`;

export const InputRowStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${theme.spacing.spacing4};
`;

export const TextStyle = (theme: Theme) => css`
  font-size: ${theme.typography.subtitle1Bold.size};
  font-weight: ${theme.typography.subtitle1Bold.weight};
  line-height: ${theme.typography.subtitle1Bold.lineHeight};
`;

export const TinyTextStyle = css`
  font-size: 12px;
  color: #888888;
  margin-top: 4px;
`;

export const productWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: ${theme.spacing.spacing4};
  border: 1px solid ${theme.colors.semantic.border.default};
  border-radius: 8px;
  width: 100%;
`;

export const productImage = (theme: Theme) => css`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid ${theme.colors.semantic.border.default};
`;

export const productInfoStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing2};
`;

export const productNameStyle = (theme: Theme) => css`
  font-weight: ${theme.typography.subtitle1Bold.weight};
  font-size: ${theme.typography.subtitle1Bold.size};
  color: ${theme.colors.semantic.text.default};
`;

export const productBrandStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body2Regular.size};
  color: ${theme.colors.semantic.text.sub};
`;

export const productPriceStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body1Regular.size};
  color: ${theme.colors.semantic.text.default};
  strong {
    font-weight: ${theme.typography.subtitle1Bold.weight};
  }
`;

export const totalPriceBoxStyle = (theme: Theme) => css`
  font-size: ${theme.typography.title2Bold.size};
  color: ${theme.colors.semantic.text.default};
  font-weight: ${theme.typography.subtitle1Bold.weight};
`;

export const fixedBottomStyle = (theme: Theme) => css`
  width: 100%;
  position: fixed;
  max-width: 688px;
  bottom: 0;
  background-color: ${theme.colors.yellow.yellow500};
  padding: ${theme.spacing.spacing11};
`;

export const SubmitStyle = (theme: Theme) => css`
  width: 100%;
  height : 50%
  padding: ${theme.spacing.spacing4};
  color: black;
  font-size: ${theme.typography.title1Regular.size};
  font-weight: ${theme.typography.title1Regular.weight};
  border: none;
  cursor: pointer;
  text-align: center;
`;

export const InputWrapperStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${theme.spacing.spacing1};
`;

export const ErrorMessageStyle = (theme: Theme) => css`
  font-size: ${theme.typography.subtitle1Bold.size};
  color: red;
  margin: ${theme.spacing.spacing1} 0 0 ${theme.spacing.spacing1};
`;
