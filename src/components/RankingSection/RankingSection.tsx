import styled from '@emotion/styled'
import { useState, useMemo, useEffect } from 'react'
import { RankingItem } from './RankingItem'
import { mockProduct } from '@/data/products'

const filters = [
  { label: '전체', emoji: 'ALL' },
  { label: '여성이', emoji: '👩🏻' },
  { label: '남성이', emoji: '👨🏻' },
  { label: '청소년이', emoji: '👦🏻' },
]

const tabs = ['받고 싶어한', '많이 선물한', '위시로 받은']

export const RankingSection = () => {

  const [selectedFilter, setSelectedFilter] = useState(() => {
    return localStorage.getItem('selectedFilter') || '전체'
  })

  const [selectedTab, setSelectedTab] = useState(() => {
    return localStorage.getItem('selectedTab') || '받고 싶어한'
  })


  const handleFilterChange = (label: string) => {
    setSelectedFilter(label)
    localStorage.setItem('selectedFilter', label)
  }

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab)
    localStorage.setItem('selectedTab', tab)
  }

  const list = useMemo(
    () => Array.from({ length: 6 }, (_, i) => ({ ...mockProduct, id: i })),
    []
  )

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>

      <FilterRow>
        {filters.map(({ emoji, label }) => (
          <Filter
            key={label}
            selected={label === selectedFilter}
            onClick={() => handleFilterChange(label)} 
          >
            <div className="emoji">{emoji}</div>
            <span>{label}</span>
          </Filter>
        ))}
      </FilterRow>

      <TabRow>
        {tabs.map((t) => (
          <Tab
            key={t}
            selected={t === selectedTab}
            onClick={() => handleTabChange(t)}  
          >
            {t}
          </Tab>
        ))}
      </TabRow>

      <Grid>
        {list.map((item, idx) => (
          <RankingItem
            key={item.id + '-' + idx}
            rank={idx + 1}
            image={item.imageURL}
            brand={item.brandInfo.name}
            name={item.name}
            price={item.price.sellingPrice}
          />
        ))}
      </Grid>
    </Section>
  )
}


const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing6};
`

const Title = styled.h3`
  ${({ theme }) => theme.typography.title2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`




const FilterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 16px;
`

const Filter = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  padding: 12px 0;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .emoji {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background-color: ${({ selected, theme }) =>
        selected ? theme.colors.blue[600] : theme.colors.blue[100]};
    color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;  
  }

  span {
    font-size: 0.875rem;
    color: ${({ selected, theme }) =>
        selected ? theme.colors.blue[700] : theme.colors.gray[500]};
    font-weight: 500;
  }
`



const TabRow = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: ${({ theme }) =>
        theme.colors.blue[100] || '#f0f6ff'};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`

const Tab = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.spacing3} 0;
  font-size: 0.875rem;
  background: transparent;
  color: ${({ selected, theme }) => selected ? theme.colors.blue[700] : theme.colors.gray[800]};
  font-weight: ${({ selected }) => selected ? 700 : 500};
  border: none;
  cursor: pointer;


  border-bottom: none;


  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing2}; 
`
