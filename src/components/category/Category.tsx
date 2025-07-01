import { css } from '@emotion/react';
import styled from "@emotion/styled";

const mockData = [
  {
    themeId: 3715,
    name: "생일",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371520241125_LQBMT.png",
  },
  {
    themeId: 3714,
    name: "맛있는선물",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371420250401_CYHOR.png",
  },
  {
    themeId: 3713,
    name: "직장동료",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371320250107_QWGZN.png",
  },
  {
    themeId: 3712,
    name: "연인",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371220250107_YMYGC.png",
  },
  {
    themeId: 3993,
    name: "FOR ME",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F399320250519_CMTFF.png",
  },
  {
    themeId: 3710,
    name: "가벼운선물",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371020250102_QSNFV.png",
  },
  {
    themeId: 3782,
    name: "스몰럭셔리",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F378220250214_OHAQK.png",
  },
  {
    themeId: 3877,
    name: "명품선물",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F387720250324_SDCJQ.png",
  },
  {
    themeId: 3707,
    name: "출산・돌",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370720241228_QFZPM.png",
  },
  {
    themeId: 3697,
    name: "결혼・집들이",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F369720250126_OGWLG.png",
  },
  {
    themeId: 3704,
    name: "시원한선물",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370420250324_WDMHS.png",
  },
  {
    themeId: 3705,
    name: "합격・응원",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370520250127_NLVFN.png",
  },
  {
    themeId: 3706,
    name: "건강・케어",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370620250415_HENTO.png",
  },
  {
    themeId: 3703,
    name: "교환권",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370320250331_NPPCU.png",
  },
  {
    themeId: 3702,
    name: "웃긴선물",
    image:
      "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370220241228_UPSAE.png",
  },
];
const CategoryWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.gray.gray00};
`;

const CategoryHeader = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing5};
`;
const CategoryTitle=styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 27px;
`
const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing5} ${({ theme }) => theme.spacing.spacing2};
`;

const CategoryItem = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content: center;
    gap: 0.25rem;
`;

const CategoryImage = styled.img`
  max-width: 3.125rem;
    max-height: 3.125rem;
    width: 100%;
    object-fit: cover;
  border-radius: 18px;
`;

const Category = () => {
  return (
    <CategoryWrapper>
      <CategoryHeader>
        <CategoryTitle>선물 테마</CategoryTitle>
      </CategoryHeader>

      <CategoryGrid>
        {mockData.map((item) => (
          <CategoryItem key={item.themeId}>
            <CategoryImage src={item.image} alt={item.name} />
            <p css={css`
                font-size: 0.75rem;
                font-weight: 400;
                line-height: 1rem;
            `}>{item.name}</p>
          </CategoryItem>
        ))}
      </CategoryGrid>
    </CategoryWrapper>
  );
};

export default Category;