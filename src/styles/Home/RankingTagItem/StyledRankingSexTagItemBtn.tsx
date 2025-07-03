import styled from '@emotion/styled';

interface SexTagBtnProps {
  isSelected: boolean;
}
const StyledRankingSexTagItemBtn = styled.button<SexTagBtnProps>`
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
  border: none;
  div {
    background-color: ${({ theme, isSelected }) => (isSelected ? theme.palette.blue700 : theme.palette.blue200)};
    border-radius: 10px;
    width: 45px;
    height: 45px;
  }
  p {
    color: ${({ theme, isSelected }) => (isSelected ? theme.palette.blue700 : theme.palette.gray500)};
    ${({ theme, isSelected }) => (isSelected ? theme.typography.label1Bold : theme.typography.label1Regular)}
  }
`;

export default StyledRankingSexTagItemBtn;
