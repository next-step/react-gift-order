import styled from '@emotion/styled';
import type { Product } from '@/types/Product';

interface Props {
  item: Product;
  rank: number;
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 4px;
  }
`;

const RankBadge = styled.span<{ top3: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  background: ${({ top3, theme }) => (top3 ? theme.colors.red[600] : theme.colors.gray[600])};
  border-radius: 4px;
  ${({ theme }) => theme.typography.label2Bold};
  color: #fff;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.spacing3};

  span {
    ${({ theme }) => theme.typography.body2Regular};
    color: ${({ theme }) => theme.colors.semantic.textSub};
  }
`;

const Name = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
`;

const Price = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

export default function RankingProductCard({ item, rank }: Props) {
  const isTop3 = rank <= 3;

  return (
    <Card>
      <ItemImage>
        <img src={item.imageURL} alt={item.name} />
        <RankBadge top3={isTop3}>{rank}</RankBadge>
      </ItemImage>

      <Brand>
        <span>{item.brandInfo.name}</span>
      </Brand>

      <Name>{item.name}</Name>
      <Price>{item.price.sellingPrice.toLocaleString()} 원</Price>
    </Card>
  );
}
