import styled from '@emotion/styled';
import { productData } from '@/data/PRODUCT_DATA';

const ProductCard = () => {
  const { imageURL, name, price, brandInfo } = productData;

  return (
    <Card>
      <ProductImage src={imageURL} alt={name} />
      <BrandName>{brandInfo.name}</BrandName>
      <Price>{price.basicPrice.toLocaleString()}원</Price>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 215px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const BrandName = styled.div`
  margin-top: 8px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSub};
`;

const Price = styled.div`
  margin-top: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDefault};
`;
