﻿import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'

const FilterBarWrapper = styled.div`
  margin: ${spacing.spacing6} 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing4};
`

// 아이콘 버튼들을 감싸는 행
const GenderIconRow = styled.div`
  display: flex;
  gap: 120px;
  padding: 0 ${spacing.spacing4};
`

// 레이블을 감싸는 행
const GenderLabelRow = styled.div`
  display: flex;
  gap: 120px;
  padding: 0 ${spacing.spacing4};
`

const GenderButton = styled.button<{ selected: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.spacing2};
  background-color: ${({ selected }) =>
    selected ? colors.blue[700] : 'transparent'};
  border: none;
  border-radius: ${spacing.spacing3};
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 12px;
  }
`

const GenderIcon = styled.span<{ selected: boolean }>`
  font-size: 1.5rem;
  color: ${({ selected }) =>
    selected ? colors.gray[0] : colors.gray[900]};
`

const GenderLabel = styled.span<{ selected: boolean }>`
  ${typography.label1Regular};
  text-align: center;
  flex: 1;
  color: ${({ selected }) =>
    selected ? colors.blue[700] : colors.gray[900]};

  &:not(:last-of-type) {
    margin-right: 12px;
  }
`

const SortTabsWrapper = styled.div`
  display: flex;
  background-color: ${colors.gray[100]};
  border-radius: ${spacing.spacing2};
  overflow: hidden;
`

const SortTab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px 0;
  background-color: ${({ active }) => (active ? colors.gray[0] : 'transparent')};
  border: none;
  cursor: pointer;
  ${typography.body1Regular};
  color: ${({ active }) => (active ? colors.blue[700] : colors.gray[900])};

  &:not(:last-of-type) {
    border-right: 1px solid ${colors.gray[300]};
  }
`

export interface RankingFilterBarProps {
  genders?: { key: string; label: string; icon: React.ReactNode }[]
  sorts?: { key: string; label: string }[]
  onGenderChange?: (key: string) => void
  onSortChange?: (key: string) => void
}

export function RankingFilterBar({
  genders = [
    { key: 'all', label: '전체', icon: 'ALL' },
    { key: 'female', label: '여성이', icon: '👩🏻' },
    { key: 'male', label: '남성이', icon: '👨🏻' },
    { key: 'teen', label: '청소년이', icon: '👦🏻' },
  ],
  sorts = [
    { key: 'wanted', label: '받고 싶어한' },
    { key: 'sent', label: '많이 선물한' },
    { key: 'wished', label: '위시로 받은' },
  ],
  onGenderChange,
  onSortChange,
}: RankingFilterBarProps) {
    const [searchParams, setSearchParams] = useSearchParams();
  const selectedGender = searchParams.get('gender') ?? genders[0].key
  const selectedSort = searchParams.get('sort') ?? sorts[0].key

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    let changed = false
    if (!searchParams.get('gender')) {
      params.set('gender', genders[0].key)
      changed = true
    }
    if (!searchParams.get('sort')) {
      params.set('sort', sorts[0].key)
      changed = true
    }
    if (changed) {
      setSearchParams(params, { replace: true })
    }
  }, [])
  return (
    <FilterBarWrapper>
      {/* 1) 아이콘 버튼 행 */}
      <GenderIconRow>
        {genders.map((g) => {
          const isSelected = g.key === selectedGender
          return (
            <GenderButton
              key={g.key}
              selected={isSelected}
              onClick={() => {
                const params = new URLSearchParams(searchParams)
                params.set('gender', g.key)
                setSearchParams(params)
              }}
            >
              <GenderIcon selected={isSelected}>{g.icon}</GenderIcon>
            </GenderButton>
          )
        })}
      </GenderIconRow>

      {/* 2) 버튼 밖 레이블 행 */}
      <GenderLabelRow>
        {genders.map((g) => {
          const isSelected = g.key === selectedGender
          return (
            <GenderLabel key={g.key} selected={isSelected}>
              {g.label}
            </GenderLabel>
          )
        })}
      </GenderLabelRow>

      {/* 3) 정렬 탭 */}
      <SortTabsWrapper>
        {sorts.map((s) => {
          const isActive = s.key === selectedSort
          return (
            <SortTab
              key={s.key}
              active={isActive}
              onClick={() => {
                const params = new URLSearchParams(searchParams)
                params.set('sort', s.key)
                setSearchParams(params)
              }}
            >
              {s.label}
            </SortTab>
          )
        })}
      </SortTabsWrapper>
    </FilterBarWrapper>
  )
}

export default RankingFilterBar
