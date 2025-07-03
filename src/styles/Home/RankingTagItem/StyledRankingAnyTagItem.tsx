import styled from '@emotion/styled';

interface AnyTagBtnProps {
  isSelected: boolean;
}
const StyledRankingAnyTagItem = styled.button<AnyTagBtnProps>`
  color: ${({ theme, isSelected }) => (isSelected ? theme.palette.blue700 : theme.palette.blue400)};
  ${({ theme, isSelected }) => (isSelected ? theme.typography.label1Bold : theme.typography.label1Regular)}
  border: none;
  background-color: inherit;
`;

export default StyledRankingAnyTagItem;
