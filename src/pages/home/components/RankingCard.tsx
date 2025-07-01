import styled from "@emotion/styled";

type RankingCardProps = {
  rank: number;
  name: string;
  imageURL: string;
  price: number;
  brandName: string;
  brandImageURL: string;
};

export const RankingCard = ({
  rank,
  name,
  imageURL,
  price,
  brandName,
  brandImageURL,
}: RankingCardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <ProductImage src={imageURL} alt={name} />
        <RankBadge>{rank}위</RankBadge>
      </ImageWrapper>

      <BrandInfo>
        <BrandImage src={brandImageURL} alt={brandName} />
        <BrandName>{brandName}</BrandName>
      </BrandInfo>

      <ProductName>{name}</ProductName>
      <Price>{price.toLocaleString()}원</Price>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RankBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #fee500;
  padding: 2px 6px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
`;

const BrandInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
`;

const BrandImage = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-size: 12px;
  color: #555;
`;

const ProductName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2a3038;
  line-height: 1.3;
  margin-bottom: 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #2a3038;
`;
