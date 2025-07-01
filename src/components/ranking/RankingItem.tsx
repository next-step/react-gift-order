import styled from '@emotion/styled';
import { PaddingSm } from '../padding/Padding';
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
`;
const Brand = styled.p`
  ${({theme}) => theme.typography.subtitle2Regular};
  color: ${({ theme }) => theme.colors.gray.gray600};
`;
const Name = styled.p`
  ${({ theme }) => theme.typography.subtitle2Regular};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
const Price = styled.p`
  ${({theme}) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
interface RankingItemProps {
  id: number;   
    name: string;
    imageURL: string;

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
const RankingItem = ({ id, name, imageURL, price, brandInfo }: RankingItemProps) => {
  return (
    <div key={id}>
      <Image src={imageURL} alt={name} />
      <Brand>{brandInfo.name}</Brand>
      <Name>{name}</Name>
      <PaddingSm />
      <Price>{price.sellingPrice}원</Price>
    </div>
  );
}

export default RankingItem
