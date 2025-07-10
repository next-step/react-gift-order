import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
interface ProductItemProps {
  id: number;
  name: string;
  imageURL: string;
  sellingPrice: number;
  brandImageURL: string;
  brandName: string;
}

const ProductItem = ({
  id,
  name,
  imageURL,
  sellingPrice,
  brandImageURL,
  brandName,
}: ProductItemProps) => {
  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate(`/order/${id}`);
  };

  return (
    <Card onClick={goToOrderPage}>
      <Thumbnail src={imageURL} alt={name} />
      <Brand>
        <BrandLogo src={brandImageURL} alt={brandName} />
        <BrandName>{brandName}</BrandName>
      </Brand>
      <ProductName>{name}</ProductName>
      <Price>{sellingPrice.toLocaleString()}원</Price>
    </Card>
  );
};

export default ProductItem;

const Card = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 5px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const BrandLogo = styled.img`
  width: 16px;
  height: 16px;
`;

const BrandName = styled.span`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.text.sub};
`;

const ProductName = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.color.text.default};
`;

const Price = styled.p`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.color.text.default};
`;
