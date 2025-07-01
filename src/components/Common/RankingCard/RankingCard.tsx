import {
  BrandName, Card,
  ImageWrapper, Price,
  ProductImage,
  ProductName,
  RankBadge,
} from "@/components/Common/RankingCard/RankingCard.styles";

interface Props {
  rank: number;
  image: string;
  name: string;
  price: string;
  brand: string;
}

export default function RankingCard({ rank, image, name, price, brand }: Props) {
  return (
    <Card>
      <ImageWrapper>
        <RankBadge>{rank}</RankBadge>
        <ProductImage src={image} alt={name} />
      </ImageWrapper>
      <BrandName>{brand}</BrandName>
      <ProductName>{name}</ProductName>
      <Price>{price}</Price>
    </Card>
  );
}
