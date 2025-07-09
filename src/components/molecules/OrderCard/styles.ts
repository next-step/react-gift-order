import styled from '@emotion/styled';

export const Container = styled.div<{ isSelected: boolean }>`
  flex: 0 0 auto;
  width: 82px;
  height: 56px;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
  border: 3px solid ${props => props.isSelected ? props.theme.semantic.text.default : 'transparent'};
  background: ${({ theme }) => theme.semantic.background.default};
  cursor: pointer;
`;
