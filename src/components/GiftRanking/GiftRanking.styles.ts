import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  padding: ${({ theme }) => theme.spacing.spacing11} ${({ theme }) => theme.spacing.spacing5};
`;

export const Heading = styled.h2`
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const TabRow = styled.div`
  display: flex;
  font: ${({ theme }) => theme.typography.label1Regular};
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const CategoryTab = styled.button<{ isSelected: boolean }>`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  cursor: pointer;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.semantic.info : theme.colors.semantic.textSub};
`;

export const TabCircle = styled.div<{ isSelected: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.semantic.info : theme.colors.semantic.backgroundDisabled};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.semantic.backgroundDefault : theme.colors.semantic.textSub};
  border-radius: ${({ theme }) => theme.spacing.spacing5};
  width: ${({ theme }) => theme.spacing.spacing12};
  height: ${({ theme }) => theme.spacing.spacing12};
  font : ${({ theme }) => theme.typography.label1Bold};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortRow = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const SortTab = styled.button<{ isSelected: boolean }>`
  all: unset;
  font : ${({ theme }) => theme.typography.label2Bold};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.semantic.info : theme.colors.semantic.textSub};
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;

export const RankBadge = styled.div<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  background: ${({ theme, rank }) =>
    rank <= 3 ? theme.colors.red.red600 : theme.colors.semantic.textSub};
  color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  font: ${({ theme }) => theme.typography.label2Bold};
  padding: 2px 6px;
  border-radius: 6px;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.spacing1};
`;

export const BrandName = styled.div`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textSub};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

export const ItemName = styled.div`
  font: ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-top: 2px;
`;

export const Price = styled.div`
  font: ${({ theme }) => theme.typography.label2Bold};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-top: 2px;
`;

export const Button = styled.button`
  margin: ${({ theme }) => theme.spacing.spacing6} auto 0;
  width: 70%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  font: ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
  display: block;
`;
