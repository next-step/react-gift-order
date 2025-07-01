import * as S from './styles';

// 기본 프로퍼티
interface BaseItemCardProps {
  imageUrl: string;
  title: string;
  variant: 'category' | 'product'; 
}

// 리뷰, 늘어날 가능성있는 부분 분리해서 사용 
interface RankingItemCardProps {
  subtitle?: string;   
  price?: number;       
  rank?: number;       
}

type ItemCardProps = BaseItemCardProps & RankingItemCardProps;

const ItemCard = (props: ItemCardProps) => {
  const { imageUrl, title, subtitle, price, rank, variant } = props;
  
  const isProductCard = variant === 'product';
  
  return (
    <S.Card>
      {isProductCard && rank !== undefined && <S.RankBadge rank={rank}>{rank}</S.RankBadge>}
      <S.Image src={imageUrl} alt={title} variant={variant} />
      
      {isProductCard ? (
        <>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <S.ProductName>{title}</S.ProductName>
          {price !== undefined && <S.Price>{price.toLocaleString()} <span>원</span></S.Price>}
        </>
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Card>
  );
};

export default ItemCard; 