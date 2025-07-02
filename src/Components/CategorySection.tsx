import styled from '@emotion/styled'

const categories = [
  {
    themeId: 3715,
    name: '생일',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371520241125_LQBMT.png',
  },
  {
    themeId: 3714,
    name: '맛있는선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371420250401_CYHOR.png',
  },
  {
    themeId: 3713,
    name: '직장동료',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371320250107_QWGZN.png',
  },
  {
    themeId: 3712,
    name: '연인',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371220250107_YMYGC.png',
  },
  {
    themeId: 3993,
    name: 'FOR ME',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F399320250519_CMTFF.png',
  },
  {
    themeId: 3710,
    name: '가벼운선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371020250102_QSNFV.png',
  },
  {
    themeId: 3782,
    name: '스몰럭셔리',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F378220250214_OHAQK.png',
  },
  {
    themeId: 3877,
    name: '명품선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F387720250324_SDCJQ.png',
  },
  {
    themeId: 3707,
    name: '출산・돌',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370720241228_QFZPM.png',
  },
  {
    themeId: 3697,
    name: '결혼・집들이',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F369720250126_OGWLG.png',
  },
  {
    themeId: 3704,
    name: '시원한선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370420250324_WDMHS.png',
  },
  {
    themeId: 3705,
    name: '합격・응원',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370520250127_NLVFN.png',
  },
  {
    themeId: 3706,
    name: '건강・케어',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370620250415_HENTO.png',
  },
  {
    themeId: 3703,
    name: '교환권',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370320250331_NPPCU.png',
  },
  {
    themeId: 3702,
    name: '웃긴선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370220241228_UPSAE.png',
  },
]

const SectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 32px 0 0 0;
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-bottom: 24px;
  letter-spacing: -1px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px 0;
  justify-items: center;
  align-items: center;
  width: 100%;
  @media (max-width: 600px) {
    gap: 20px 0;
  }
`

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CategoryImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.gray.gray100};
  margin-bottom: 10px;
  border: none;
`

const CategoryName = styled.div`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  text-align: center;
  letter-spacing: -0.2px;
  white-space: nowrap;
`

const CategorySection = () => {
  return (
    <SectionWrapper>
      <Title>선물 테마</Title>
      <GridContainer>
        {categories.map((cat) => (
          <CategoryItem key={cat.themeId}>
            <CategoryImage src={cat.image} alt={cat.name} />
            <CategoryName>{cat.name}</CategoryName>
          </CategoryItem>
        ))}
      </GridContainer>
    </SectionWrapper>
  )
}

export default CategorySection 