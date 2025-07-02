/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';

export const backgroundStyle = (theme: ThemeType) => css`
  background-color: ${theme.color.semantic.backgroundDefault};
  min-height: 100vh;
`;

export const cardStyle = (theme: ThemeType) => css`
  max-width: 450px;
  margin: ${theme.spacing[12]} auto;
  background-color: ${theme.color.semantic.backgroundDefault};
  padding: 180px ${theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: ${theme.spacing[2]};
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.03);
`;

export const logoStyle = (theme: ThemeType) => css`
  font-size: ${theme.spacing[8]};
  font-weight: bold;
  text-align: center;
  margin-bottom: ${theme.spacing[6]};
`;

export const inputStyle = (theme: ThemeType, hasError: boolean) => css`
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: none;
  border-bottom: 1px solid ${hasError ? theme.color.red.red800 : theme.color.gray.gray400};
  background-color: transparent;
  font-size: ${theme.typography.body2Regular.fontSize};
  color: ${theme.color.gray.gray900};
  caret-color: ${theme.color.gray.gray900};

  &::placeholder {
    color: ${theme.color.semantic.textPlaceholder};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${hasError ? theme.color.red.red800 : theme.color.gray.gray600};
    box-shadow: 0 1px 0 0 ${hasError ? theme.color.red.red800 : theme.color.gray.gray600};
  }
`;

export const errorTextStyle = (theme: ThemeType) => css`
  color: ${theme.color.red.red800};
  font-size: ${theme.typography.body2Regular.fontSize};
  margin-top: ${theme.spacing[1]};
`;

export const loginButtonStyle = (theme: ThemeType) => css`
  margin-top: ${theme.spacing[4]};
  padding: ${theme.spacing[3]};
  background-color: ${theme.color.yellow.yellow600};
  border: none;
  border-radius: ${theme.spacing[2]};
  font-weight: 500;
  font-size: ${theme.typography.body1Bold.fontSize};
  cursor: pointer;
`;