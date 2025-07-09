import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

type FilterType = '전체' | '여성이' | '남성이' | '청소년이';
type TabType = '받고 싶어한' | '많이 선물한' | '위시로 받은';

const FILTERS: FilterType[] = ['전체', '여성이', '남성이', '청소년이'];
const TABS: TabType[] = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const mockItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
}));

const Section = styled.section(({ theme }) => ({
  padding: theme.spacing.spacing4,
}));

const Title = styled.h2(({ theme }) => ({
  fontSize: theme.typography.title2Bold.fontSize,
  fontWeight: theme.typography.title2Bold.fontWeight,
  color: theme.colors.semantic.textDefault,
  marginBottom: theme.spacing.spacing4,
}));

const FilterRow = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.spacing2,
  marginBottom: theme.spacing.spacing3,
}));

const FilterButton = styled.button<{ active: boolean }>(
  ({ theme, active }) => ({
    padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
    borderRadius: '20px',
    backgroundColor: active
      ? theme.colors.blue.blue600
      : theme.colors.gray.gray100,
    color: active ? '#fff' : theme.colors.gray.gray700,
    border: 'none',
    fontSize: theme.typography.label2Regular.fontSize,
    cursor: 'pointer',
    fontWeight: 600,
  })
);

const TabRow = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.gray.gray100,
  padding: theme.spacing.spacing1,
  borderRadius: '8px',
  marginBottom: theme.spacing.spacing4,
}));

const TabButton = styled.button<{ active?: boolean }>(({ theme, active }) => ({
  flex: 1,
  padding: theme.spacing.spacing2,
  fontSize: theme.typography.body2Bold.fontSize,
  fontWeight: theme.typography.body2Bold.fontWeight,
  border: 'none',
  borderRadius: '6px',
  backgroundColor: active ? theme.colors.blue.blue600 : 'transparent',
  color: active ? '#fff' : theme.colors.gray.gray600,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
}));

const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing.spacing4,
}));

const Card = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const RankBadge = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '6px',
  left: '6px',
  backgroundColor: theme.colors.red.red700,
  color: '#fff',
  padding: '2px 6px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 'bold',
}));

const Brand = styled.p(({ theme }) => ({
  marginTop: theme.spacing.spacing2,
  fontSize: theme.typography.label2Regular.fontSize,
  color: theme.colors.gray.gray600,
}));

const ProductName = styled.p(({ theme }) => ({
  fontWeight: theme.typography.body2Bold.fontWeight,
  fontSize: theme.typography.body2Bold.fontSize,
  margin: 0,
}));

const Price = styled.p(({ theme }) => ({
  marginTop: '4px',
  fontWeight: theme.typography.body2Bold.fontWeight,
  fontSize: theme.typography.body2Bold.fontSize,
}));

const ToggleButton = styled.button(({ theme }) => ({
  display: 'block',
  margin: `${theme.spacing.spacing4} auto 0`,
  marginTop: theme.spacing.spacing4,
  padding: `${theme.spacing.spacing3} ${theme.spacing.spacing10}`,
  border: `1px solid ${theme.colors.gray.gray300}`,
  background: 'white',
  color: theme.colors.gray.gray800,
  borderRadius: '8px',
  fontSize: theme.typography.body2Regular.fontSize,
  cursor: 'pointer',
  fontWeight: 500,
}));

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 기본값 설정
  const rawFilter = searchParams.get('filter');
  const rawTab = searchParams.get('tab');
  const rawExpanded = searchParams.get('expanded');

  const selectedFilter: FilterType = FILTERS.includes(rawFilter as FilterType)
    ? (rawFilter as FilterType)
    : '전체';

  const selectedTab: TabType = TABS.includes(rawTab as TabType)
    ? (rawTab as TabType)
    : '받고 싶어한';

  const isExpanded = rawExpanded === 'true';

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  const visibleItems = isExpanded ? mockItems : mockItems.slice(0, 6);

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>

      {/* 필터 */}
      <FilterRow>
        {FILTERS.map((label) => (
          <FilterButton
            key={label}
            active={selectedFilter === label}
            onClick={() => updateParam('filter', label)}
          >
            {label}
          </FilterButton>
        ))}
      </FilterRow>

      {/* 탭 */}
      <TabRow>
        {TABS.map((label) => (
          <TabButton
            key={label}
            active={selectedTab === label}
            onClick={() => updateParam('tab', label)}
          >
            {label}
          </TabButton>
        ))}
      </TabRow>

      {/* 상품 카드 */}
      <Grid>
        {visibleItems.map((item) => (
          <Card key={item.id}>
            <ImageWrapper>
              <ProductImage src={item.imageURL} alt={item.name} />
              <RankBadge>{item.id}</RankBadge>
            </ImageWrapper>
            <Brand>{item.brandInfo.name}</Brand>
            <ProductName>{item.name}</ProductName>
            <Price>{item.price.sellingPrice.toLocaleString()} 원</Price>
          </Card>
        ))}
      </Grid>

      {/* 더보기 / 접기 버튼 */}
      <ToggleButton
        onClick={() => updateParam('expanded', (!isExpanded).toString())}
      >
        {isExpanded ? '접기' : '더보기'}
      </ToggleButton>
    </Section>
  );
};

export default RankingSection;
