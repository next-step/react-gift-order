import styled from '@emotion/styled'

const filters = ['전체', '여성이', '남성이', '청소년이']

const FilterWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`

const FilterButton = styled.button`
  background: none;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
`

export const RankingFilter = () => {
  return (
    <FilterWrapper>
      {filters.map((label, i) => (
        <FilterButton key={i}>{label}</FilterButton>
      ))}
    </FilterWrapper>
  )
}
export default RankingFilter