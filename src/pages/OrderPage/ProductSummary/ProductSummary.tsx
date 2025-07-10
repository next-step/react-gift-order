import { useParams } from 'react-router-dom';
import { productList } from '@/data/products';
import type { Product } from '@/data/products.types';
import * as S from './ProductSummary.styles';

const ProductSummary = () => {
  const { id } = useParams();
  const productId = parseInt(id ?? '', 10);
  const product: Product | undefined = productList.find((p) => p.id === productId);

  if (!product) {
    return <p>상품 정보를 불러올 수 없습니다.</p>;
  }

  return (
    <S.Wrapper>
      <S.Thumbnail src={product.imageURL} alt={product.name} />
      <S.Info>
        <S.Name>{product.name}</S.Name>
        <S.Brand>
          <img src={product.brandInfo.imageURL} alt={product.brandInfo.name} />
          <span>{product.brandInfo.name}</span>
        </S.Brand>
        <S.Price>{product.price.sellingPrice.toLocaleString()}원</S.Price>
      </S.Info>
    </S.Wrapper>
  );
};

export default ProductSummary;
