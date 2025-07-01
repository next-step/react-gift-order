import styled from '@emotion/styled';
import type { ThemeItemType } from '@/types/theme';

const ThemeItem = ({ themeId, name, image }: ThemeItemType) => {
  return (
    <ItemWrapper>
      <ItemImage src={image} alt={name} />
      <ItemLabel>{name}</ItemLabel>
    </ItemWrapper>
  );
};

export default ThemeItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`;

const ItemLabel = styled.span`
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: ${theme.font.label2Regular.weight};
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
`;
