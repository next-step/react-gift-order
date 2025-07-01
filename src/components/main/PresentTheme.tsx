import { category } from "@/__mock__";
import { ThemeItem } from "@/components/main";
import styled from "@emotion/styled";

const PresentSectionPadding = styled.div(({ theme }) => ({
  width: "100%",
  height: "24px",
  backgroundColor: `${theme.color.gray[0]}`,
}));

const PresentSectionContainer = styled.section(({ theme }) => ({
  width: "100%",
  height: "313px",
  padding: `${theme.spacing2}`,
  backgroundColor: `${theme.color.gray[0]}`,
}));

const PresentSectionTitleWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 ${theme.spacing2} ${theme.spacing5}`,
}));

const PresentSectionTitle = styled.h3(({ theme }) => ({
  fontSize: `${theme.typography.title1Bold.fontSize}`,
  fontWeight: `${theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${theme.typography.title1Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
}));

const PresentSectionGridContainer = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "repeat(3,1fr)",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: `${theme.spacing1}`,
  rowGap: `${theme.spacing5}`,
}));

export const PresentTheme = () => {
  const categories = category;
  return (
    <>
      <PresentSectionPadding />
      <PresentSectionContainer>
        <PresentSectionTitleWrapper>
          <PresentSectionTitle>선물 테마</PresentSectionTitle>
        </PresentSectionTitleWrapper>
        <PresentSectionGridContainer>
          {categories.map(category => (
            <ThemeItem key={category.themeId} {...category} />
          ))}
        </PresentSectionGridContainer>
      </PresentSectionContainer>
      <PresentSectionPadding />
    </>
  );
};
