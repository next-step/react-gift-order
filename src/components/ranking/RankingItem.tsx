import styled from "@emotion/styled";
import { PaddingSm } from "../common/Padding";
const RankingItemWrap = styled.div`
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
`;
const Brand = styled.p`
  ${({ theme }) => theme.typography.subtitle2Regular};
  color: ${({ theme }) => theme.colors.gray.gray600};
`;
const Name = styled.p`
  ${({ theme }) => theme.typography.subtitle2Regular};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
const Price = styled.p`
  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
interface RankingItemProps {
  id: number;
  name: string;
  imageURL: string;
  onClick: () => void;

  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}
const RankingItem = ({
  id,
  name,
  imageURL,
  price,
  brandInfo,
  onClick,
}: RankingItemProps) => {
  return (
    <RankingItemWrap onClick={onClick} key={id}>
      <Image src={imageURL} alt={name} />
      <Brand>{brandInfo.name}</Brand>
      <Name>{name}</Name>
      <PaddingSm />
      <Price>{price.sellingPrice}원</Price>
    </RankingItemWrap>
  );
};

export default RankingItem;
