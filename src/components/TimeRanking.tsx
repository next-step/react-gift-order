import styled from '@emotion/styled'
import { useState } from 'react'
import { ranking } from '@/data/ranking'
import { useSearchParams } from 'react-router-dom'
import Spacing from './Spacing'

const genderOptions = [
  { label: 'ALL', icon: 'ALL', value: 'ALL' },
  { label: '여성이', icon: '👩🏻', value: '여성' },
  { label: '남성이', icon: '👨🏻', value: '남성' },
  { label: '청소년이', icon: '🧒🏻', value: '청소년' },
]

const rankTypeTabs = ['받고 싶어한', '많이 선물한', '위시로 받은']

export default function TimeRanking() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedGender, setSelectedGender] = useState(() => searchParams.get('gender') || 'ALL')
  const [selectedRankType, setSelectedRankType] = useState(() => searchParams.get('rankType') || '받고 싶어한')
  const [showAll, setShowAll] = useState(false)

  const handleGenderChange = (value: string) => {
    setSelectedGender(value)
    searchParams.set('gender', value)
    setSearchParams(searchParams)
  }

  const handleRankTypeChange = (value: string) => {
    setSelectedRankType(value)
    searchParams.set('rankType', value)
    setSearchParams(searchParams)
  }

  const filteredRanking = ranking.filter(() => true)
  const itemsToShow = showAll ? filteredRanking : filteredRanking.slice(0, 6)

  return (
    <Container>
      <Spacing height="40px" />
      <Title>실시간 급상승 선물랭킹</Title>
      <Spacing height="20px" />

      <GenderBox>
        {genderOptions.map(({ label, icon, value }) => (
          <GenderTab key={value}>
            <GenderButton
              isSelected={selectedGender === value}
              onClick={() => handleGenderChange(value)}
            >
              {icon}
            </GenderButton>
            <GenderText>{label}</GenderText>
          </GenderTab>
        ))}
      </GenderBox>

      <Spacing height="16px" />

      <RankingBox>
        {rankTypeTabs.map((tab) => (
          <RankingTab
            key={tab}
            isSelected={selectedRankType === tab}
            onClick={() => handleRankTypeChange(tab)}
          >
            {tab}
          </RankingTab>
        ))}
      </RankingBox>

      <Spacing height="16px" />

      <CardGrid>
        {itemsToShow.map((item, index) => (
          <Card key={`${item.id}-${index}`}>
            <RankLabel>{index + 1}</RankLabel>
            <Image src={item.imageURL} alt={item.name} />
            <Spacing height="12px" />
            <Brand>{item.brandInfo.name}</Brand>
            <Name>{item.name}</Name>
            <Price>{item.price.sellingPrice.toLocaleString()}원</Price>
          </Card>
        ))}
      </CardGrid>

      {filteredRanking.length > 6 && (
        <>
          <Spacing height="32px" />
          <ButtonWrapper>
          <ToggleButton onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? '접기' : '더보기'}
          </ToggleButton>
          </ButtonWrapper>
        </>
      )}
      <Spacing height="40px" />
    </Container>
  )
}

const Container = styled.section`
  padding: 0 16px;
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1Bold};
  margin: 0;
`

const GenderBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

const GenderTab = styled.div`
  width: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray.white : theme.colors.blue[400]};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
  ${({ theme }) => theme.typography.subtitle2Bold};
`

const GenderText = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`

const RankingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 8px;
  padding: 12px 16px;
`

const RankingTab = styled.button<{ isSelected: boolean }>`
  flex: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  ${({ theme, isSelected }) =>
    isSelected ? theme.typography.label1Bold : theme.typography.label1Regular};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[400]};
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
  margin-top: 16px;
`

const Card = styled.div`
  position: relative;
`

const RankLabel = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.red[600]};
  color: ${({ theme }) => theme.colors.text.default};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.label2Bold};
`

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`

const Brand = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[600]};
`

const Name = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Price = styled.p`
  margin: 4px 0 0;
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`


const ToggleButton = styled.button`
  max-width: 480px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  padding: 12px;
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
  text-align: center;
`
