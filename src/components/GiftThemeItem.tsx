import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { GiftTheme } from '@/types';

interface ThemeItemProps {
  theme: GiftTheme;
  onClick: (theme: GiftTheme) => void;
}

export function GiftThemeItem({ theme, onClick }: ThemeItemProps) {
  const handleClick = () => {
    onClick(theme);
  };

  return (
    <StyledThemeItem onClick={handleClick}>
      <ThemeImage src={theme.image} alt={theme.name} />
      <ThemeName>{theme.name}</ThemeName>
    </StyledThemeItem>
  );
}

const StyledThemeItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.spacing2};
  border-radius: 12px;
  transition: all 0.2s ease;
`;

const ThemeImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  margin-bottom: ${theme.spacing.spacing2};
  object-fit: cover;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

const ThemeName = styled.span`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  color: ${theme.colors.textDefault};
  text-align: center;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
