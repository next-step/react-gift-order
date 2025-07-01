import styled from '@emotion/styled';
import { spacing } from '@/styles/tokens';
import type { Product } from '@/types';
import { ProductCard } from '@/components/common/ProductCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.lg};
  padding: 0 ${spacing.lg} ${spacing.lg};
`;

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export const ProductGrid = ({ products, onProductClick }: ProductGridProps) => {
  return (
    <GridContainer>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} rank={index + 1} onClick={onProductClick} />
      ))}
    </GridContainer>
  );
};
