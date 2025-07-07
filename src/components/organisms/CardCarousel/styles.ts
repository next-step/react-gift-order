import styled from '@emotion/styled';

export const ScrollContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.spacing2} 0;
  
  &::-webkit-scrollbar {
    height: ${({ theme }) => theme.spacing.spacing2};
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.semantic.background.fill};
    border-radius: ${({ theme }) => theme.spacing.spacing1};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.semantic.border.default};
    border-radius: ${({ theme }) => theme.spacing.spacing1};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.semantic.text.sub};
  }
`;
