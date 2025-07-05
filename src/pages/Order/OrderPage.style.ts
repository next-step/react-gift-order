/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';

export const containerStyle = (theme: ThemeType) => css`
  padding: ${theme.spacing[6]};
  max-width: 720px;
  margin: 0 auto;
`;

export const sectionStyle = (theme: ThemeType) => css`
  border-top: 1px solid ${theme.color.gray.gray400};
  padding-top: ${theme.spacing[5]};
  margin-top: ${theme.spacing[5]};
`;

export const cardSelectorStyle = (theme: ThemeType) => css`
  margin-bottom: ${theme.spacing[4]};
`;

export const thumbListStyle = (theme: ThemeType) => css`
  display: flex;
  overflow-x: auto;
  padding-bottom: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
`;

export const thumbStyle = (theme: ThemeType) => css`
  width: 80px;
  height: 60px;
  object-fit: cover;
  margin-right: ${theme.spacing[2]};
  border-radius: ${theme.spacing[2]};
  cursor: pointer;
  border: 2px solid transparent;
  flex-shrink: 0;
`;

export const selectedThumbStyle = (theme: ThemeType) => css`
  border-color: ${theme.color.yellow.yellow600};
`;

export const selectedImageStyle = (theme: ThemeType) => css`
  width: 70%;
  margin: 0 auto;
  display: block;
  border-radius: ${theme.spacing[4]};
`;

export const messageInputStyle = (theme: ThemeType) => css`
  width: 100%;
  min-height: 100px;
  padding: ${theme.spacing[3]};
  font-size: ${theme.typography.body2Regular.fontSize};
  border-radius: ${theme.spacing[2]};
  border: 1px solid ${theme.color.gray.gray300};
  resize: vertical;
`;

export const titleStyle = (theme: ThemeType) => css`
  font-size: ${theme.typography.title2Bold.fontSize};
  font-weight: bold;
  margin: ${theme.spacing[5]} 0 ${theme.spacing[3]};
`;

export const formGroupStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
  width: 100%;

  input {
    padding: ${theme.spacing[3]};
    border: 1px solid ${theme.color.gray.gray300};
    border-radius: ${theme.spacing[2]};
    font-size: ${theme.typography.body2Regular.fontSize};
    width: 100%;
  }

  label {
    font-weight: bold;
    margin-bottom: ${theme.spacing[1]};
    display: inline-block;
  }
`;

export const horizontalFormStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[2]};
  width: 100%;

  input {
    flex: 1;
    padding: ${theme.spacing[3]};
    border: 1px solid ${theme.color.gray.gray300};
    border-radius: ${theme.spacing[2]};
    font-size: ${theme.typography.body2Regular.fontSize};
    width: 100%;
  }
`;

export const receiverLabelStyle = (theme: ThemeType) => css`
  width: 80px;
  font-weight: normal;
  color: ${theme.color.gray.gray700};
`;

export const helperTextStyle = (theme: ThemeType) => css`
  font-size: ${theme.typography.label2Regular.fontSize};
  color: ${theme.color.gray.gray600};
  margin-top: ${theme.spacing[1]};
`;

export const productInfoStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  background: ${theme.color.gray.gray100};
  padding: ${theme.spacing[3]};
  border-radius: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[5]};

  p {
    margin: 0 0 ${theme.spacing[1]};
    font-size: ${theme.typography.body2Regular.fontSize};
  }

  strong {
    font-size: ${theme.typography.body1Bold.fontSize};
    color: ${theme.color.gray.gray900};
  }
`;

export const productImageStyle = (theme: ThemeType) => css`
  width: 60px;
  height: 60px;
  margin-right: ${theme.spacing[3]};
  object-fit: cover;
  border-radius: ${theme.spacing[2]};
`;

export const orderButtonStyle = (theme: ThemeType) => css`
  width: 100%;
  background: ${theme.color.yellow.yellow600};
  color: ${theme.color.gray.gray1000};
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: bold;
  padding: ${theme.spacing[4]};
  border: none;
  border-radius: ${theme.spacing[3]};
  cursor: pointer;
`;

export const errorInputStyle = css`
  border-color: red !important;
`;

export const errorMessageStyle = css`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

