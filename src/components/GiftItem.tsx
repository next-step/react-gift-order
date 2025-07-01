import styled from "@emotion/styled";
import type { Gift } from "@/types/gift";

type GiftItemProps<TElement extends React.ElementType = "div"> = {
  gift: Gift;
  rank: number;
  as?: TElement;
} & React.ComponentPropsWithoutRef<TElement>;

const GiftItem = <TElement extends React.ElementType = "div">({
  gift,
  rank,
  as,
  ...rest
}: GiftItemProps<TElement>) => {
  return (
    <GiftItemBox as={as} {...rest}>
      <RankDiv rank={rank}>{rank}</RankDiv>
      <Img src={gift.imageURL} alt={gift.name} />
      <BrandP>{gift.brandInfo.name}</BrandP>
      <NameP>{gift.name}</NameP>
      <PriceP>
        {gift.price.sellingPrice}
        <WonSpan> 원</WonSpan>
      </PriceP>
    </GiftItemBox>
  );
};

export default GiftItem;

const GiftItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const RankDiv = styled.p<{ rank: number }>`
  position: absolute;
  z-index: 2;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.label2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray00};
  background-color: ${({ theme, rank }) =>
    rank <= 3 ? theme.colors.red.red600 : theme.colors.gray.gray600};
  margin: ${({ theme }) => theme.spacing.spacing0};
`;

const Img = styled.img`
  width: 100%;
  border-radius: 4px;
  object-position: center center;
  object-fit: cover;
`;

const BrandP = styled.p`
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray600};
  margin: ${({ theme }) => `${theme.spacing.spacing3} 0 0`};
`;

const NameP = styled.p`
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: ${({ theme }) => theme.spacing.spacing0};
`;

const PriceP = styled.p`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: ${({ theme }) => `${theme.spacing.spacing1} 0 0`};
`;

const WonSpan = styled.span`
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
`;
