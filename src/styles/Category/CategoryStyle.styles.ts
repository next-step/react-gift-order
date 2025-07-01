import styled from '@emotion/styled';

export const CategoryContainerStyle = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  color: ${({ selected, theme }) => `${selected ? theme.colors.blue700 : theme.colors.blue500}`};
  cursor: pointer;
  transition: color 0.3s ease; // 애니메이션 효과 추가
`;
