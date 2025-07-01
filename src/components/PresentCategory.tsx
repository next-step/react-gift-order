import styled from "@emotion/styled";
import { presentThemes } from "@/data/present";
import PresentTheme from "./PresentTheme";

const PresentCategory = () => {
  return (
    <Background>
      <CategoryTitle>선물 테마</CategoryTitle>
      <ThemeGrid>
        {presentThemes.map(theme => (
          <PresentTheme key={theme.themeId} theme={theme} />
        ))}
      </ThemeGrid>
    </Background>
  );
};

export default PresentCategory;

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing5} ${theme.spacing.spacing2}`};
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => `${theme.spacing.spacing5} ${theme.spacing.spacing1}`};
  padding: ${({ theme }) => theme.spacing.spacing2};
`;
