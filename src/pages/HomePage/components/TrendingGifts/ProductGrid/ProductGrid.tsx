import styled from '@emotion/styled';
import type { TrendingGiftsType } from '@/types/TrendingGiftsType';
import ProductCard from '../ProductCard/ProductCard';

const ProductGridContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.grid.columns.fixed3};
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

interface ProductGridPropsType {
  products: TrendingGiftsType[];
}

function ProductGrid({ products }: ProductGridPropsType) {
  return (
    <ProductGridContainer>
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          imageURL={product.imageURL}
          name={product.name}
          brandName={product.brandInfo.name}
          sellingPrice={product.price.sellingPrice}
          index={idx}
        />
      ))}
    </ProductGridContainer>
  );
}

export default ProductGrid;
