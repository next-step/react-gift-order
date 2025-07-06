import styled from '@emotion/styled';
import { colors, semanticColors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';

export const Container = styled.div`
  padding: ${spacing.spacing5};
  background-color: ${semanticColors.background.default};
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: ${spacing.spacing3};
  overflow-x: auto;
  padding: ${spacing.spacing2} 0;
  
  &::-webkit-scrollbar {
    height: ${spacing.spacing2};
  }
  
  &::-webkit-scrollbar-track {
    background: ${colors.gray[200]};
    border-radius: ${spacing.spacing1};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.gray[500]};
    border-radius: ${spacing.spacing1};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.gray[700]};
  }
`;

export const CardContainer = styled.div<{ isSelected?: boolean }>`
  flex: 0 0 auto;
  width: 82px;
  height: 56px;
  border-radius: ${spacing.spacing2}; /* 0.5rem = 8px */
  overflow: hidden;
  border: 3px solid ${props => props.isSelected ? colors.gray[900] : 'transparent'};
  background: ${semanticColors.background.default};
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Spacer = styled.div`
  height: ${spacing.spacing5};
`; 