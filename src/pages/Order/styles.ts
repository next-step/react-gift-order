import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.semantic.background.default};
`;

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

export const CardContainer = styled.div<{ isSelected?: boolean }>`
  flex: 0 0 auto;
  width: 82px;
  height: 56px;
  border-radius: ${({ theme }) => theme.spacing.spacing2}; 
  overflow: hidden;
  border: 3px solid ${props => props.isSelected ? props.theme.semantic.text.default : 'transparent'};
  background: ${({ theme }) => theme.semantic.background.default};
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing5};
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const PreviewImageContainer = styled.div`
  width: 360px;
  height: 240px;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
  background: ${({ theme }) => theme.semantic.background.default};
  box-shadow: 0 0 0 ${({ theme }) => theme.semantic.border.default};
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const MessageInputWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing5};
`;

export const MessageTextarea = styled.textarea`
  width: 100%;
  min-height: ${({ theme }) => theme.spacing.spacing11}; 
  min-width: 120px;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3}; 
  border: 1px solid ${({ theme }) => theme.semantic.border.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2}; 
  ${({ theme }) => theme.typography.body1Regular}; 
  color: ${({ theme }) => theme.semantic.text.default};
  background-color: transparent;
`; 