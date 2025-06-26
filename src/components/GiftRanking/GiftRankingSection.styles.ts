import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing2};

`;

// 필터부분
export const FilterRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  margin: 4px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid
    ${({ isActive, theme }) =>
        isActive ? theme.color.blue700 : theme.color.blue200};
  background-color: ${({ isActive, theme }) =>
        isActive ? theme.color.blue100 : theme.color.gray00};
  color: ${({ isActive, theme }) =>
        isActive ? theme.color.blue800 : theme.color.gray800};
    font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isActive, theme }) =>
        isActive ? theme.color.blue200 : theme.color.gray100};
  }
`;
