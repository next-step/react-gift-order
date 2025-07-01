/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';
import theme from '../../styles/theme';

export const sectionWrapper = css`
  margin-top: ${theme.spacing[10]};
`;

export const tabRow = css`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: 0 auto ${theme.spacing[4]};
`;

export const subTabRow = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f7f8f9;
  border-radius: 12px;
  padding: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[6]};
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[4]};
`;

export const moreButton = (theme: ThemeType) => css`
  margin-top: ${theme.spacing[6]};
  display: block;
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  background: ${theme.color.gray.gray100};
  color: ${theme.color.gray.gray900};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const tabButton = (theme: ThemeType, active: boolean) => css`
  width: 75px;
  padding: ${theme.spacing[2]} 0;
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray700};
  background-color: ${active ? theme.color.blue.blue100 : theme.color.gray.gray100};
  border: none;
  border-radius: ${theme.spacing[5]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[1]};
  text-align: center;
`;

export const subTabButton = (theme: ThemeType, active: boolean) => css`
  background: ${active ? '#fff' : 'transparent'};
  border: none;
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray600};
  border-radius: ${theme.spacing[3]};
  padding: ${theme.spacing[2]} 0;
  cursor: pointer;
  width: 100%;
`;

export const iconStyle = css`
  font-size: 24px;
`;
