import {
    Card,
    RankBadge,
    ProductImage,
    BrandName,
    ItemName,
    Price,
} from '@/components/GiftRanking/GiftRanking.styles';
type ProductCardProps = {
    rank: number;
    imageURL: string;
    brand: string;
    name: string;
    price: number;
};

const ProductCard = ({ rank, imageURL, brand, name, price }: ProductCardProps) => (
    <Card>
        <RankBadge rank={rank}>{rank}</RankBadge>
        <ProductImage src={imageURL} alt={name} />
        <BrandName>{brand}</BrandName>
        <ItemName>{name}</ItemName>
        <Price>
            {price.toLocaleString()} 원
        </Price>
    </Card>
);

export default ProductCard;
