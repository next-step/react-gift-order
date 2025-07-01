import styled from '@emotion/styled'
import { useState } from 'react'
import { productMockData } from '@/mocks/products'
import { useSearchParams } from 'react-router-dom'

const genderTabs = ['전체', '여성이', '남성이', '청소년이']
const rankTabs = ['받고 싶어한', '많이 선물한', '위시로 받은']
// TODO : 임시 하드코딩. 추후 개수 변경 가능
const initCount = 6
const fullCount = 12

const SectionWrapper = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing6};
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`

const UserGroupTab = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`

const UserTab = styled.button<{ isSelected: boolean }>`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ isSelected, theme }) => isSelected ? theme.colors.blue.blue700 : theme.colors.gray.gray100};
  color: ${({ isSelected, theme }) => isSelected ? theme.colors.gray.gray00 : theme.colors.gray.gray700};
  font-weight: 500;
  text-align: center;
  .all {
    display: block;
    font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.label2Bold.fontWeight};
  }
`

const Avatar = styled.div`
  width: ${({ theme }) => theme.spacing.spacing6};
  height: ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 50%;
  margin: 0 auto ${({ theme }) => theme.spacing.spacing1};
`

const TrendGroupTab = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray.gray100};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`

const TrendTab = styled.button<{ isSelected: boolean }>`
  flex: 1;
  text-align: center;
  color: ${({ isSelected, theme }) => isSelected ? theme.colors.blue.blue700 : theme.colors.gray.gray500};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`

const ProductCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray.gray00};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
  padding-bottom: ${({ theme }) => theme.spacing.spacing2};
  img {
    width: 100%;
  }
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`

const Badge = styled.div<{ isTop3: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  background-color: ${({ theme, isTop3 }) => isTop3 ? theme.colors.red.red600 : theme.colors.gray.gray400};
  color: ${({ theme }) => theme.colors.gray.gray00};
  padding: ${({ theme }) => `${theme.spacing.spacing0} ${theme.spacing.spacing1}`};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
`

const Brand = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray.gray700};
  padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing2} 0`};
`

const Name = styled.div`
  ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
`

const Price = styled.div`
  ${({ theme }) => theme.typography.body2Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing2}`};
`

const ToggleButton = styled.button`
  display: block;
  width: 100%;
  max-width: 400px; 
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  text-align: center;
  font-weight: 500;
  cursor: pointer;
`

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedGender = searchParams.get('gender') || '전체'
  const selectedRank = searchParams.get('rank') || '많이 선물한'
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  const handleGenderClick = (gender: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('gender', gender)
      return next
    })
  }

  const handleRankClick = (rank: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('rank', rank)
      return next
    })
  }

  const visibleCount = isExpanded ? fullCount : initCount
  const productList = Array.from({ length: fullCount }, (_, i) => ({
    ...productMockData[0],
    id: productMockData[0].id + i,
  }))

  return (
    <SectionWrapper>
      <Title>실시간 급상승 선물랭킹</Title>

      <UserGroupTab>
        {genderTabs.map((tab) => (
          <UserTab
            key={tab}
            isSelected={selectedGender === tab}
            onClick={() => handleGenderClick(tab)}
          >
            {tab === '전체' ? <span className="all">ALL</span> : <Avatar />}
            <span>{tab}</span>
          </UserTab>
        ))}
      </UserGroupTab>

      <TrendGroupTab>
        {rankTabs.map((tab) => (
          <TrendTab
            key={tab}
            isSelected={selectedRank === tab}
            onClick={() => handleRankClick(tab)}
          >
            {tab}
          </TrendTab>
        ))}
      </TrendGroupTab>

      <ProductGrid>
        {productList.slice(0, visibleCount).map((item, idx) => (
          <ProductCard key={item.id}>
            <Badge isTop3={idx < 3}>{idx + 1}</Badge>
            <img src={item.imageURL} alt={item.name} />
            <Brand>{item.brandInfo.name}</Brand>
            <Name>{item.name}</Name>
            <Price>
              <strong>{item.price.sellingPrice.toLocaleString()}</strong> 원
            </Price>
          </ProductCard>
        ))}
      </ProductGrid>

      <ToggleButton onClick={handleToggle}>
        {isExpanded ? '접기' : '더보기'}
      </ToggleButton>
    </SectionWrapper>
  )
}

export default RankingSection

