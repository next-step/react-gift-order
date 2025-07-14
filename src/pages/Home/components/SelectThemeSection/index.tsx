import styled from '@emotion/styled';
import { MOCK_THEME_LIST } from './mock';
import { SelectThemeSectionListItem } from './ListItem';
import { Typography } from '@/components/common/Typography';

export const SelectThemeSection = () => {
  return (
    <Section>
      <TitleWrapper>
        <Typography as='h3' variant='title1Bold' color='default' width='100%'>
          선물 테마
        </Typography>
      </TitleWrapper>
      <Wrapper>
        {MOCK_THEME_LIST.map((theme) => (
          <SelectThemeSectionListItem key={theme.themeId} label={theme.name} image={theme.image} />
        ))}
      </Wrapper>
    </Section>
  );
};

const Section = styled.section(({ theme }) => ({
  padding: `0${theme.spacing.spacing2}`,
}));

const TitleWrapper = styled.div(({ theme }) => ({
  padding: `0 ${theme.spacing.spacing2} ${theme.spacing.spacing5}`,
}));

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: `${theme.spacing.spacing5} ${theme.spacing.spacing1}`,
}));
