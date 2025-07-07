import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { colors } from '@/tokens/designTokens';

export const Container = styled.section`
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.colorScale.gray[0]};
`;

export const GenderTab = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing[5]};
`;

export const GenderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const GenderButton = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${theme.spacing[13]};
  height: ${theme.spacing[13]};
  border-radius: ${theme.spacing[4]};
  background: ${({ isActive }) =>
    isActive
      ? theme.colors.colorScale.blue[700]
      : theme.colors.colorScale.blue[100]};
  color: ${({ isActive }) =>
    isActive
      ? theme.colors.colorScale.blue[0]
      : theme.colors.colorScale.blue[500]};
  transition: background-color 0.2s ease;
  ${theme.typography.subtitle1Bold};
  user-select: none;
`;

export const GenderLabel = styled.div<{ isActive: boolean }>`
  margin-top: ${theme.spacing[2]};
  font-size: ${theme.spacing[4]};
  color: ${({ isActive }) =>
    isActive
      ? theme.colors.colorScale.blue[700]
      : theme.colors.semanticColor.textColor.default};
  transition: color 0.2s ease;
  ${({ isActive }) =>
    isActive ? theme.typography.label1Bold : theme.typography.label1Regular};
  user-select: none;
`;

export const TypeTab = styled.div`
  display: flex;
  width: 100%;
  border-radius: ${theme.spacing[2]};
  overflow: hidden;
  border: 1px solid ${theme.colors.colorScale.blue[300]};
  margin: 0 auto ${theme.spacing[4]};
`;

export const TypeButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: ${theme.spacing[3]} 0;
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.colorScale.blue[100]};
  color: ${({ isActive }) =>
    isActive
      ? theme.colors.colorScale.blue[700]
      : theme.colors.colorScale.blue[400]};
  transition: color 0.3s ease;
  ${({ isActive }) =>
    isActive ? theme.typography.label1Bold : theme.typography.label1Regular};
  user-select: none;
`;

export const ProductTab = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[0]};
`;

export const ProductItem = styled.div`
  position: relative;
  background: ${theme.colors.semanticColor.backgroundColor.default};
  border-radius: ${theme.spacing[2]};
  padding: ${theme.spacing[1]};
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  p, strong {
    color: ${colors.text};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: ${theme.spacing[2]};
`;

export const Rank = styled.div<{ rank: number }>`
  position: absolute;
  top: ${theme.spacing[2]};
  left: ${theme.spacing[2]};
  padding: ${theme.spacing[0]} ${theme.spacing[1]};
  border-radius: ${theme.spacing[1]};
  background-color: ${({ rank }) =>
    rank <= 3
      ? theme.colors.colorScale.red[600]
      : theme.colors.colorScale.gray[200]};
  color: ${({ rank }) =>
    rank <= 3
      ? theme.colors.colorScale.gray[0]
      : theme.colors.colorScale.gray[1000]};
  ${theme.typography.label2Bold}
`;

export const MoreButton = styled.button`
  width: 70%;
  margin: ${theme.spacing[4]} auto;
  display: block;
  cursor: pointer;
  padding: ${theme.spacing[3]};
  border-radius: ${theme.spacing[1]};
  border: 1px solid ${theme.colors.colorScale.gray[400]};
  background-color: ${theme.colors.colorScale.gray[0]};
  ${theme.typography.label1Regular};
`;

export const RankingTitle = styled.h2`
  color: ${theme.colors.semanticColor.textColor.default};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: ${theme.spacing[4]};
`;
