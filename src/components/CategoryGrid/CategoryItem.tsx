import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius } from '@/styles/tokens';
import type { CategoryTheme } from '@/types/index.ts';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sm};
  cursor: pointer;
  padding: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.gray100};
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Label = styled.span`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.gray700};
  text-align: center;
  line-height: ${typography.lineHeight.tight};
`;

interface CategoryItemProps {
  category: CategoryTheme;
  onClick?: (category: CategoryTheme) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, onClick }) => {
  return (
    <ItemContainer onClick={() => onClick?.(category)}>
      <ImageContainer>
        <CategoryImage src={category.image} alt={category.name} />
      </ImageContainer>
      <Label>{category.name}</Label>
    </ItemContainer>
  );
};
