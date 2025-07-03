import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { GiftTheme } from '@/types';
import { GiftThemeItem } from './GiftThemeItem';

interface GiftCategoryGridProps {
  themes: GiftTheme[];
  onThemeClick?: (theme: GiftTheme) => void;
}

export function GiftCategoryGrid({
  themes,
  onThemeClick,
}: GiftCategoryGridProps) {
  const handleThemeClick = (theme: GiftTheme) => {
    onThemeClick?.(theme);
  };

  return (
    <Container>
      <SectionTitle>선물 테마</SectionTitle>
      <Grid>
        {themes.map(theme => (
          <GiftThemeItem
            key={theme.themeId}
            theme={theme}
            onClick={handleThemeClick}
          />
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: ${theme.spacing.spacing4};
  background: ${theme.colors.default};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
  color: ${theme.colors.gray1000};
  margin: 0 0 ${theme.spacing.spacing4} 0;
  padding-left: ${theme.spacing.spacing4};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.spacing4};

  @media (max-width: 480px) {
    gap: ${theme.spacing.spacing3};
  }
`;
