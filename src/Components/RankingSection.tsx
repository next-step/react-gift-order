import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLoginContext } from '@/contexts/LoginContext'
import { products } from '@/data/products'
import PersonIcon from '@mui/icons-material/Person'

// 타입 정의
export type FilterKey = 'all' | 'female' | 'male' | 'teen'
export type TabKey = 'want' | 'many' | 'wish'

const filterKeys = ['all', 'female', 'male', 'teen'] as const;
const tabKeys = ['want', 'many', 'wish'] as const;

function isFilterKey(value: any): value is FilterKey {
  return filterKeys.includes(value);
}
function isTabKey(value: any): value is TabKey {
  return tabKeys.includes(value);
}

const filters: { key: FilterKey; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: '전체', icon: null },
  { key: 'female', label: '여성', icon: <PersonIcon style={{fontSize: 28}} /> },
  { key: 'male', label: '남성', icon: <PersonIcon style={{fontSize: 28}} /> },
  { key: 'teen', label: '청소년', icon: <PersonIcon style={{fontSize: 28}} /> },
]

const tabList: { key: TabKey; label: string }[] = [
  { key: 'want', label: '받고 싶어한' },
  { key: 'many', label: '많이 선물한' },
  { key: 'wish', label: '위시로 받은' },
]

const rankingData = products;

const Section = styled.section`
  width: 100%;
  margin: 40px 0 0 0;
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-bottom: 18px;
  text-align: left;
`

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 18px;
  justify-content: center;
`

const FilterBtn = styled.button<{active?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({active, theme}) => active ? theme.colors.blue.blue700 : theme.colors.gray.gray100};
  color: ${({active, theme}) => active ? theme.colors.gray.gray00 : theme.colors.gray.gray900};
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;
  margin-bottom: 4px;
  transition: background 0.2s;
`

const FilterLabel = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-top: 2px;
`

const TabRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.blue.blue00};
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 0 0;
  height: 48px;
  overflow: hidden;
`

const TabBtn = styled.button<{active?: boolean}>`
  flex: 1;
  height: 100%;
  background: ${({active, theme}) => active ? theme.colors.blue.blue200 : 'transparent'};
  color: ${({active, theme}) => active ? theme.colors.blue.blue700 : theme.colors.gray.gray600};
  border: none;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.gray.gray00};
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  padding: 18px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
`

const RankBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ theme }) => theme.colors.red.red600};
  color: ${({ theme }) => theme.colors.gray.gray00};
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 2px 10px;
  z-index: 2;
`

const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.gray.gray200};
  margin-bottom: 14px;
`

const Brand = styled.span`
  ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.colors.gray.gray600};
  margin-bottom: 2px;
  display: block;
`

const ProductName = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  line-height: 1.3;
  margin-bottom: 6px;
  word-break: keep-all;
`

const Price = styled.span`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-top: 2px;
  display: block;
`

const MoreBtn = styled.button`
  display: block;
  margin: 0 auto 0 auto;
  background: ${({ theme }) => theme.colors.gray.gray100};
  color: ${({ theme }) => theme.colors.blue.blue700};
  border: none;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 12px 36px;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.blue.blue100};
  }
`

const FILTER_KEY = 'ranking_selected_filter'
const TAB_KEY = 'ranking_selected_tab'

const RankingSection = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginContext();
  // localStorage에서 초기값 불러오기
  const getInitialFilter = () => {
    const saved = localStorage.getItem(FILTER_KEY)
    if (isFilterKey(saved)) return saved
    return 'all'
  }
  const getInitialTab = () => {
    const saved = localStorage.getItem(TAB_KEY)
    if (isTabKey(saved)) return saved
    return 'want'
  }

  const [selectedFilter, setSelectedFilter] = useState<FilterKey>(getInitialFilter)
  const [selectedTab, setSelectedTab] = useState<TabKey>(getInitialTab)

  // 상태 변경 + localStorage 저장을 명시적으로 처리
  const handleFilterChange = (filter: FilterKey) => {
    setSelectedFilter(filter);
    localStorage.setItem(FILTER_KEY, filter);
  }
  const handleTabChange = (tab: TabKey) => {
    setSelectedTab(tab);
    localStorage.setItem(TAB_KEY, tab);
  }

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <FilterRow>
        {filters.map(f => (
          <FilterBtn
            key={f.key}
            active={selectedFilter === f.key}
            onClick={() => handleFilterChange(f.key)}
          >
            {f.icon}
            <FilterLabel>{f.label}</FilterLabel>
          </FilterBtn>
        ))}
      </FilterRow>
      <TabRow>
        {tabList.map(tab => (
          <TabBtn
            key={tab.key}
            active={selectedTab === tab.key}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </TabBtn>
        ))}
      </TabRow>
      <Grid>
        {rankingData.map((item) => (
          <Card
            key={item.id}
            onClick={() => {
              if (isLoggedIn) {
                navigate(`/order/${item.id}`);
              } else {
                navigate('/login', { state: { redirect: `/order/${item.id}` } });
              }
            }}
          >
            <RankBadge>{item.id}</RankBadge>
            <ProductImg src={item.imageUrl} alt={item.name} />
            <Brand>{item.brand}</Brand>
            <ProductName>{item.name}</ProductName>
            <Price>{item.price.toLocaleString()} 원</Price>
          </Card>
        ))}
      </Grid>
      <MoreBtn>더보기</MoreBtn>
    </Section>
  )
}

export default RankingSection