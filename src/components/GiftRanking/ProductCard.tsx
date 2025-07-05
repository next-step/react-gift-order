import {
    Card,
    RankBadge,
    ProductImage,
    BrandName,
    ItemName,
    Price,
} from '@/components/GiftRanking/GiftRanking.styles';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/paths';

type ProductCardProps = {
    id: number;
    rank: number;
    imageURL: string;
    brand: string;
    name: string;
    price: number;
};

const ProductCard = ({ id, rank, imageURL, brand, name, price }: ProductCardProps) => (
    <Link to={`${PATH.ORDER}/${id}`}>
        <Card>
            <RankBadge rank={rank}>{rank}</RankBadge>
            <ProductImage src={imageURL} alt={name} />
            <BrandName>{brand}</BrandName>
            <ItemName>{name}</ItemName>
            <Price>
                {price.toLocaleString()} 원
            </Price>
        </Card>
    </Link>
);

export default ProductCard;
