import { theme } from '@/styles/theme'
import { typographyMixin } from '@/components/common'
import styled from '@emotion/styled'
import type { TargetType, RankType } from './types'
import { FilterItems, RankItems } from './filterList'

// * 실시간 급상승 필터 컴포넌트
export const TrendFilter = ({
  targetType,
  rankType,
  onTargetTypeChange,
  onRankTypeChange,
}: {
  targetType: TargetType
  rankType: RankType
  onTargetTypeChange: (type: TargetType) => void
  onRankTypeChange: (type: RankType) => void
}) => {
  return (
    <FilterContainer>
      {/* 대상 필터 */}
      <FilterGroupContainer>
        {FilterItems.map((item) => (
          <FilterButton key={item.id} onClick={() => onTargetTypeChange(item.value)}>
            <FilterButtonIcon isSelected={targetType === item.value}>{item.icon}</FilterButtonIcon>
            <FilterButtonText isSelected={targetType === item.value}>{item.label}</FilterButtonText>
          </FilterButton>
        ))}
      </FilterGroupContainer>

      {/* 랭킹 필터 */}
      <RankGroupContainer>
        {RankItems.map((item) => (
          <RankButton key={item.id} onClick={() => onRankTypeChange(item.value)}>
            <RankButtonText isSelected={rankType === item.value}>{item.label}</RankButtonText>
          </RankButton>
        ))}
      </RankGroupContainer>
    </FilterContainer>
  )
}

// * 실시간 급상승 필터 컨테이너
const FilterContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing4};
`

// * 필터 그룹 컨테이너
const FilterGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.spacing2};
  flex-wrap: wrap;
`

// * 필터 그룹 컨테이너
const RankGroupContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing3};

  background-color: ${theme.colors.blue.blue100};
  border: 1px solid ${theme.colors.blue.blue200};
  border-radius: ${theme.spacing.spacing2};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.spacing2};
  flex-wrap: wrap;
`

// * 필터 버튼
const FilterButton = styled.button`
  border: none;
  background-color: transparent;

  ${typographyMixin('body2Regular')}

  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.spacing2};
`

// * 랭크 필터 버튼
const RankButton = styled.button`
  flex: 1;
  border: none;
  background-color: transparent;

  ${typographyMixin('body2Regular')}

  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;
`

// * 필터 버튼 텍스트
const FilterButtonText = styled.span<{ isSelected: boolean }>`
  ${typographyMixin('body2Regular')}

  ${({ isSelected }) =>
    isSelected
      ? `
        color: ${theme.colors.blue.blue700};
        font-weight: ${theme.typography.body.body2Bold.fontWeight};
      `
      : `
        color: ${theme.colors.gray.gray700};
      `}
`

// * 랭크 필터 버튼 텍스트
const RankButtonText = styled.span<{ isSelected: boolean }>`
  ${typographyMixin('body2Regular')}

  ${({ isSelected }) =>
    isSelected
      ? `
        color: ${theme.colors.blue.blue700};
        font-weight: ${theme.typography.body.body2Bold.fontWeight};
      `
      : `
        color: ${theme.colors.blue.blue500};
      `}
`

// * 필터 버튼 아이콘
const FilterButtonIcon = styled.span<{ isSelected: boolean }>`
  width: 44px;
  height: 44px;

  border-radius: ${theme.spacing.spacing4};

  ${typographyMixin('body2Bold')}

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;

  ${({ isSelected }) =>
    isSelected
      ? `
        background-color: ${theme.colors.blue.blue700};
        color: ${theme.colors.gray.gray00};
        border-color: ${theme.colors.blue.blue700};
      `
      : `
        background-color: ${theme.colors.blue.blue100};
        color: ${theme.colors.blue.blue400};
        
        &:hover {
          background-color: ${theme.colors.blue.blue200};
          border-color: ${theme.colors.blue.blue700};
        }
      `}
`
