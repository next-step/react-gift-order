import type { GiftCardType } from '@/types/giftItems';
import styled from '@emotion/styled';

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Rank = styled.div<{ rank: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1.25rem;
  aspect-ratio: 1/1;
  top: 0.3rem;
  left: 0.3rem;
  border-radius: 0.2rem;
  background-color: ${({ theme, rank }) =>
    rank <= 3 ? theme.colors.red600 : theme.colors.gray600};
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;

const Name1 = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const Name2 = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
`;

const Price = styled.div`
  ${({ theme }) => theme.typography.label1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const GiftCard = ({ id, image, brandName, price }: GiftCardType) => {
  return (
    <Card>
      <Rank rank={id}>{id}</Rank>
      <Image src={image} />
      <Name1>{brandName}</Name1>
      <Name2>{brandName}</Name2>
      <Price>{price} 원</Price>
    </Card>
  );
};
